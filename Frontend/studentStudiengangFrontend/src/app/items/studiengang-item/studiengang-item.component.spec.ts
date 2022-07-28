import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiengangItemComponent } from './studiengang-item.component';

describe('StudiengangItemComponent', () => {
  let component: StudiengangItemComponent;
  let fixture: ComponentFixture<StudiengangItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiengangItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiengangItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
