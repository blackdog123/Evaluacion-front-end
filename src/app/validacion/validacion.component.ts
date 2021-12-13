import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent implements OnInit {

  mostrar="";

  formContacto = new FormGroup({
  marca: new FormControl('',[Validators.required,Validators.minLength(5)]),
  descripcion: new FormControl('',[Validators.required,Validators.maxLength(100)]),
  precio: new FormControl('',[Validators.required,Validators.min(0)])
  });
  
  enviado = new FormGroup({
    marca: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl('')
  })

  submit(){
  if(this.formContacto.valid){

    alert("Datos guardados correctamente");
    //aquí debería pushear el array
  }else{
    alert("!Error¡, no se guardaron los datos");
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
