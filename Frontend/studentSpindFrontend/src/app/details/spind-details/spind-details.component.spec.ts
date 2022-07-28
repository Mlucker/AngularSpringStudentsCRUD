import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpindDetailsComponent } from './spind-details.component';

describe('SpindDetailsComponent', () => {
  let component: SpindDetailsComponent;
  let fixture: ComponentFixture<SpindDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpindDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
