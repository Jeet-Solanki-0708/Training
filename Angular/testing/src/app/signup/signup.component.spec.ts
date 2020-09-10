import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SignupComponent , User} from './signup.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,FormsModule,RouterTestingModule],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    component.form.controls['email'].setValue("dhairya@gmail.com");
    component.form.controls['password'].setValue("12");
    expect(component.form.valid).toBeTruthy();
    let user: User;
    component.loggedIn.subscribe((value) => user = value);
    component.login();
    expect(user.email).toBe("dhairya@gmail.com");
    expect(user.password).toBe("12");
});
});
