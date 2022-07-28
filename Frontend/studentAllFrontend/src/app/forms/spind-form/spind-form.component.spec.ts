import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpindFormComponent } from './spind-form.component';

describe('SpindFormComponent', () => {
  let component: SpindFormComponent;
  let fixture: ComponentFixture<SpindFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpindFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
