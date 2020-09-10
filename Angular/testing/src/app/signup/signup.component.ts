import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'

export class User {
  constructor(public email: string,
    public password: string) {
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  form;
  constructor( private router:Router,fb:FormBuilder) {
    this.form=fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  login() {
    console.log(this.form);
    if (this.form.valid) {
      this.loggedIn.emit(
        new User(
            this.form.value.email,
            this.form.value.password
        )
    );
    }
  }
}
