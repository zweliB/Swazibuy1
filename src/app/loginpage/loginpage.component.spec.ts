import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './loginpage.component';

describe('LoginpageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
