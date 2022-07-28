import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiengangFormComponent } from './studiengang-form.component';

describe('StudiengangFormComponent', () => {
  let component: StudiengangFormComponent;
  let fixture: ComponentFixture<StudiengangFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiengangFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiengangFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
