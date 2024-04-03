import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercamarkeComponent } from './mercamarke.component';

describe('MercamarkeComponent', () => {
  let component: MercamarkeComponent;
  let fixture: ComponentFixture<MercamarkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercamarkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercamarkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
