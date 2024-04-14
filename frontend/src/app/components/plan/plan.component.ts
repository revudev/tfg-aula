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
  styleUrl: 'plan.component.css'
})
export class PlanComponent {
  dispo = ['Creatividad', 'Proactividad', 'Resiliencia', 'Innovación', 'Autodirección', 'Determinación', 'Adaptabilidad', 'Liderazgo'];
  eleccion = ['Visión', 'Pasión'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  currentUser: any;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getUserFromLocalStorage();
  }
}
