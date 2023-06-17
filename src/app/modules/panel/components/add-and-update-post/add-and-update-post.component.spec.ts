import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdatePostComponent } from './add-and-update-post.component';

describe('AddAndUpdatePostComponent', () => {
  let component: AddAndUpdatePostComponent;
  let fixture: ComponentFixture<AddAndUpdatePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAndUpdatePostComponent]
    });
    fixture = TestBed.createComponent(AddAndUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
