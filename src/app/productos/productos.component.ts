import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  verproductos = true; 
  vercompra = false; 
  totalPagar=0;
  totalProductos=0;

  prod = {
    codigo:0,
    marca:"",
    descripcion:"",  
    precio:0
  }

  productos:Array<any> = [{codigo:1, marca:'LG', descripcion:'Televisor', precio: 250000, img:'./assets/images/tv.jpg'},
                          {codigo:2, marca:'Samsung', descripcion:'SmartPhone', precio: 450000, img:'./assets/images/phone.jpg'},
                          {codigo:3, marca:'Fensa', descripcion:'Refrigerador', precio: 450000, img:'./assets/images/refrigerador.jpg'},
                          {codigo:4, marca:'Mademsa', descripcion:'Cocina a gas', precio: 250000, img:'./assets/images/cocina.jpg'},
                          {codigo:5, marca:'Microsoft', descripcion:'Xbox Series X', precio: 780000, img:'./assets/images/xbox.jpg'},
                          {codigo:6, marca:'Sony', descripcion:'Play Station 5', precio: 680000, img:'./assets/images/play5.jpg'},
                        ];

  carrito:Array<any> = [];


  constructor() { }


  ngOnInit(): void {
  }

  hayproductos(){
    return this.carrito.length != 0;
  }
 
  eliminar(codigo:number) {
    for(let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo==codigo) {
        this.productos.splice(i,1)
      }
    }
  }

  eliminarCarrito(codigo:number) {
    for(let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].codigo==codigo) {
        this.carrito.splice(i,1)
      }
    }
  }
  seleccionar(prod:{marca:string;descripcion:string;precio:number; codigo:number}){
    this.prod.marca = prod.marca;
    this.prod.descripcion = prod.descripcion;
    this.prod.precio = prod.precio;
    this.prod.codigo = prod.codigo;
  }

  agregarCarro(prod:{marca:string;descripcion:string;precio:number; codigo:number}){
    
    this.prod.marca = prod.marca;
    this.prod.descripcion = prod.descripcion;
    this.prod.precio = prod.precio;
    this.prod.codigo = prod.codigo;

    this.carrito.push(prod);


  }

  modificar(){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == this.prod.codigo){
        this.productos[i].descripcion = this.prod.descripcion;
        this.productos[i].precio = this.prod.precio;
        this.productos[i].marca = this.prod.marca;
        alert("Producto modificado");
        return;
      }
    }
    alert("No existe el producto");
  }

  agregar(){
    let flag = true;

    if(this.prod.codigo == 0 || isNaN(this.prod.codigo) ){
      alert("codigo invalido, debe contener solo numeros");
      flag = false;
    } 
    if( this.prod.marca.length < 5 ||  this.prod.marca==null){
      alert("la marca es invalida, debe contener al menos 5 caracteres");
      flag = false;
    } 
    if( this.prod.descripcion.length <= 10 || this.prod.descripcion==null){
      alert("la descripcion es invalida, debe contener al menos 10 caracteres");
      flag = false;
    } 
    if(this.prod.precio == 0 || isNaN(this.prod.precio)){
      alert("el precio es invalido, debe contener solo números");
      flag = false;
    }

    for(let i=0; i<this.productos.length;i++){
      if(this.productos[i].codigo == this.prod.codigo){
        alert("Ya se encuentra un producto con ese código");
        flag = false;
      }
      
    }

    if(flag == false ){
      return;
    }else{
      this.productos.push(this.prod);
      
      this.prod ={
        codigo:0,
        marca:"",
        descripcion:"",  
        precio:0
      }

      alert("Producto agregado");
    }
    
  }

  filterDatos = undefined;
  ////////////////////COMPRA
  panelOpenState = false;

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
    let flag=true;
    
    if( this.formDireccion.value.pais.length < 1 ||  this.formDireccion.value.pais==null || this.formDireccion.value.pais.length > 100){
      alert("el pais es invalida, debe contener entre 1 y 100 caracteres");
      flag = false;
    } 
    if( this.formDireccion.value.calle.length < 1 ||  this.formDireccion.value.calle==null || this.formDireccion.value.calle.length > 100){
      alert("la calle es invalida, debe contener entre 1 y 100 caracteres");
      flag = false;
    } 
    if( this.formDireccion.value.ciudad.length < 1 ||  this.formDireccion.value.ciudad==null || this.formDireccion.value.ciudad.length > 100){
      alert("la ciudad es invalida, debe contener entre 1 y 100 caracteres");
      flag = false;
    } 
    if( this.formDireccion.value.region.length < 1 ||  this.formDireccion.value.region==null || this.formDireccion.value.region.length > 100){
      alert("la region es invalida, debe contener entre 1 y 100 caracteres");
      flag = false;
    } 
    
    if(this.formDireccion.value.codigoPostal < 0 || isNaN(this.formDireccion.value.codigoPostal) ){
      alert("codigo invalido, debe contener solo numeros");
      flag = false;
    } 

    if(flag == false ){
      return;
    }else{
      alert("Los datos de dirección se guardaron correctamente")
    }
  }

  submitPago(){
    alert("Los datos de pago se guardaron correctamente")

  }
  comprar(){
    this.verproductos = false;
    this.vercompra=true;
    this.totalProductos=this.carrito.length;
    for(let i=0 ; i < this.carrito.length ; i++ ){
    
      this.totalPagar= this.totalPagar + this.carrito[i].precio;
    }

  }
}
