import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: 'plan.component.html',
  styleUrl: 'plan.component.css',
})
export class PlanComponent {
  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getUserLS();
    this.loadCurrentTheme();
  }

  currentUser: any;
  themes = ['Iniciativa emprendedora', 'Mercado y Marketing', 'Gestiones'];
  currentThemeIndex = 0;
  available: any = {
    'Iniciativa emprendedora': [
      'Creatividad',
      'Proactividad',
      'Adaptabilidad',
      'Liderazgo',
    ],
    'Mercado y Marketing': [
      'Competencia perfecta',
      'Competencia imperfecta',
      'Mercado monopolístico',
    ],
    Gestiones: [
      'Gestión financiera',
      'Gestión de recursos humanos',
      'Gestión de operaciones',
    ],
  };
  selection: string[] = this.getSelection() || [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.saveSelection();
  }

  changeTheme(index: number) {
    if (index >= 0 && index < this.themes.length) {
      this.currentThemeIndex = index;
      this.selection = [];
      this.saveSelection();
      this.saveCurrentTheme();
    }
  }

  previousTheme() {
    this.changeTheme(this.currentThemeIndex - 1);
  }
  nextTheme() {
    this.changeTheme(this.currentThemeIndex + 1);
  }

  get currentTheme(): string {
    return this.themes[this.currentThemeIndex];
  }

  private saveCurrentTheme() {
    localStorage.setItem(
      'currentThemeIndex',
      this.currentThemeIndex.toString()
    );
  }

  private loadCurrentTheme() {
    const savedThemeIndex = localStorage.getItem('currentThemeIndex');
    if (savedThemeIndex !== null) {
      this.currentThemeIndex = +savedThemeIndex;
    }
  }

  private saveSelection() {
    localStorage.setItem('selection', JSON.stringify(this.selection));
  }

  private getSelection(): string[] | null {
    const savedSelection = localStorage.getItem('selection');
    if (savedSelection !== null) {
      return JSON.parse(savedSelection);
    }
    return null;
  }
}
