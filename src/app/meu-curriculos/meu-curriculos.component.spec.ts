import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCurriculosComponent } from './meu-curriculos.component';

describe('MeuCurriculosComponent', () => {
  let component: MeuCurriculosComponent;
  let fixture: ComponentFixture<MeuCurriculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeuCurriculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuCurriculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
