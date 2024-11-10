import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurriculoComponent } from './my-curriculo.component';

describe('MyCurriculoComponent', () => {
  let component: MyCurriculoComponent;
  let fixture: ComponentFixture<MyCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCurriculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
