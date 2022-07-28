import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursDetailsComponent } from './kurs-details.component';

describe('KursDetailsComponent', () => {
  let component: KursDetailsComponent;
  let fixture: ComponentFixture<KursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KursDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
