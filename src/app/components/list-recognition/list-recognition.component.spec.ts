import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecognitionComponent } from './list-recognition.component';

describe('ListRecognitionComponent', () => {
  let component: ListRecognitionComponent;
  let fixture: ComponentFixture<ListRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecognitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
