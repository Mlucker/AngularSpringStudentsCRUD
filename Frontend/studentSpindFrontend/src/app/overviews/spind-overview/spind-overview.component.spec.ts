import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpindOverviewComponent } from './spind-overview.component';

describe('SpindOverviewComponent', () => {
  let component: SpindOverviewComponent;
  let fixture: ComponentFixture<SpindOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpindOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
