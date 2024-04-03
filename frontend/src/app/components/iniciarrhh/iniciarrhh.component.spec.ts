import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarrhhComponent } from './iniciarrhh.component';

describe('IniciarrhhComponent', () => {
  let component: IniciarrhhComponent;
  let fixture: ComponentFixture<IniciarrhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarrhhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciarrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
