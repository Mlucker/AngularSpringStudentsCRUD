import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursFormComponent } from './kurs-form.component';

describe('KursFormComponent', () => {
  let component: KursFormComponent;
  let fixture: ComponentFixture<KursFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KursFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
