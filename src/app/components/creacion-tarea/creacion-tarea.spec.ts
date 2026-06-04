import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTarea } from './creacion-tarea';

describe('CreacionTarea', () => {
  let component: CreacionTarea;
  let fixture: ComponentFixture<CreacionTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionTarea],
    }).compileComponents();

    fixture = TestBed.createComponent(CreacionTarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
