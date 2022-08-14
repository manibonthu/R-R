import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGratitudeComponent } from './list-gratitude.component';

describe('ListGratitudeComponent', () => {
  let component: ListGratitudeComponent;
  let fixture: ComponentFixture<ListGratitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGratitudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGratitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
