import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpindItemComponent } from './spind-item.component';

describe('SpindItemComponent', () => {
  let component: SpindItemComponent;
  let fixture: ComponentFixture<SpindItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpindItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
