import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCarrerasComponent } from './listado-carreras.component';

describe('ListadoCarrerasComponent', () => {
  let component: ListadoCarrerasComponent;
  let fixture: ComponentFixture<ListadoCarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoCarrerasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
