import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginAndRegisterComponent } from './loginAndRegister.component';

describe('LoginComponent', () => {
  let component: loginAndRegisterComponent;
  let fixture: ComponentFixture<loginAndRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [loginAndRegisterComponent]
    });
    fixture = TestBed.createComponent(loginAndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
