import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  login_form = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  login() {
    let users = [
      {
        username: "a@a.cl",
        password: "123"
      },
      {
        username: "b@b.cl",
        password: "123"
      },
      {
        username: "c@c.cl",
        password: "123"
      }
    ];
    
    let username = this.login_form.value.username;
    let password = this.login_form.value.password;

    if(username === "" && password === "") {
      alert("!Error!, los campos están vácios");
      return false;
    }

    for (let i = 0; i < users.length; i++) {
      if(username === users[i].username && password === users[i].password ) {
        // this.route.navigate(['/productos'])
        this.redirectUser();
        return true;
      }
    }
    alert("!Error!, usuario o contraseña");
    return false;
  }

  private redirectUser(): void {
    this.route.navigate(["/productos"]);
  };

}
