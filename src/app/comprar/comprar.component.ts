import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrar="";

  formDireccion = new FormGroup({
    pais: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    calle: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    ciudad: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    region: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    codigoPostal: new FormControl('',[Validators.required,Validators.min(0),Validators.minLength(1)])
  });

  formPago = new FormGroup({
    tipoTarjeta: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    nombre: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    numeroTarjeta: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    codigoSeguridad: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    mesExpiracion: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
    anioExpiracion: new FormControl('',[Validators.required,Validators.maxLength(100),Validators.minLength(1)]),
  });

  submitDireccion(){

  }

  submitPago(){
    
  }
}
