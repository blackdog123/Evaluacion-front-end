import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private route:Router) { }

  form_register = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    email: new FormControl(),
    rut: new FormControl(),
    password: new FormControl(),
    password_confirm: new FormControl()
  });

  ngOnInit(): void {
  }

  registro() {
    let nombre = this.form_register.value.nombre;
    let apellido = this.form_register.value.apellido;
    let email = this.form_register.value.email;
    let rut = this.form_register.value.rut;
    let password = this.form_register.value.password;
    let password_confirm = this.form_register.value.password_confirm;
    let expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre === "" || apellido === "" || email === "" || rut === "" || password === "" || password_confirm === ""){
      alert("ERROR! Completar los campos");
      return false;
    } else if(!isNaN(nombre) || !isNaN(apellido)){
      alert("ERROR! Nombre y apellido no pueden ser números");
    } else if(password !== password_confirm){
      alert("ERROR! La contraseñas no coinciden");
      return false;
    } else if(!expresion.test(email)) {
      alert("ERROR! Email incorrecto");
    } else {
      alert("Registro exitoso");
      console.log(nombre, apellido, email, rut, password, password_confirm);
      this.redirectUser();
      return true;
    }
    return false;
  }

  private redirectUser(): void {
    this.route.navigate([""]);
  };

}





