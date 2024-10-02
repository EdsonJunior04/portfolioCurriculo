import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreSiteComponent } from './sobre-site.component';

describe('SobreSiteComponent', () => {
  let component: SobreSiteComponent;
  let fixture: ComponentFixture<SobreSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
