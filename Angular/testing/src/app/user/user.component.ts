import { Component, OnInit } from '@angular/core';

import { UserService } from "./user.service";
import { AnotherService } from "./user.anotherService";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService,AnotherService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data;

  constructor(private userService: UserService, private another: AnotherService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.another.getDetails().then((data) => this.data = data);
  }

}
