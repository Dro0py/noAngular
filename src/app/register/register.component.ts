import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  auth : AuthService;
  constructor(auth : AuthService, private router: Router) {
    this.auth = auth;
  }

  ngOnInit() {
  }
  registerUser(event){
    event.preventDefault();
    const target = event.target;
    const errors = [];
    const username = target.username.value;
    const password = target.password.value;
    const cpassword = target.cpassword.value;

    if(password != cpassword){
      errors.push("Passwords do not match");
    }

    if(errors.length < 0){
      this.auth.registerUser(username, password).subscribe(data => {
        console.log(data)
        if(data.success){
          this.router.navigate(['dashboard'])
        }
      });
    }
  }

}
