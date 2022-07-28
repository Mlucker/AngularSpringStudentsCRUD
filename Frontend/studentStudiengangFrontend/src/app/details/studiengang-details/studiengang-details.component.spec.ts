import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiengangDetailsComponent } from './studiengang-details.component';

describe('StudiengangDetailsComponent', () => {
  let component: StudiengangDetailsComponent;
  let fixture: ComponentFixture<StudiengangDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiengangDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiengangDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
