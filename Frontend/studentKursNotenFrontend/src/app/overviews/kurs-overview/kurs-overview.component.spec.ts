import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursOverviewComponent } from './kurs-overview.component';

describe('KursOverviewComponent', () => {
  let component: KursOverviewComponent;
  let fixture: ComponentFixture<KursOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KursOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KursOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
