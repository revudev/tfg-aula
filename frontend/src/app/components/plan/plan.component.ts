import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { AvailableData, User } from '../../../types';
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
export class PlanComponent implements OnInit {
  constructor(private authService: AuthService) {}

  currentUser?: User;
  currentThemeIndex: number = 0;
  selections: AvailableData = {};

  themes: string[] = [
    'Iniciativa emprendedora',
    'Mercado y Marketing',
    'Gestiones',
  ];
  available: AvailableData = {
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

  ngOnInit() {
    this.currentUser = this.authService.getUserLS();
    this.loadCurrentTheme();
    this.loadSelections();
    this.updateAvailable();
  }

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
    this.saveSelections();
    this.updateAvailable();
  }
  isLastTheme(): boolean {
    return this.currentThemeIndex === this.themes.length - 1;
  }

  finish() {
    alert('Guardar valores en bbdd y dirigir a perfil');
  }
  changeTheme(index: number) {
    if (index >= 0 && index < this.themes.length) {
      this.currentThemeIndex = index;
      this.saveCurrentTheme();
      this.loadSelections();
      this.updateAvailable();
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

  private saveSelections() {
    localStorage.setItem('selections', JSON.stringify(this.selections));
  }

  private loadSelections() {
    const savedSelections = localStorage.getItem('selections');
    if (savedSelections !== null) {
      this.selections = JSON.parse(savedSelections);
    }
    const currentTheme = this.themes[this.currentThemeIndex];
    if (!this.selections[currentTheme]) {
      this.selections[currentTheme] = [];
    }
  }

  private updateAvailable() {
    const currentTheme = this.themes[this.currentThemeIndex];
    const selectedItems = this.selections[currentTheme] || [];
    this.available[currentTheme] = this.available[currentTheme].filter(
      (item: string) => !selectedItems.includes(item)
    );
  }
}
