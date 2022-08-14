import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayEventComponent } from './birthday-event.component';

describe('BirthdayEventComponent', () => {
  let component: BirthdayEventComponent;
  let fixture: ComponentFixture<BirthdayEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
