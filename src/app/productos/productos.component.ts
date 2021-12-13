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
        this.productos.splice(i, 1);
      }
    }
  }

  eliminarCarrito(codigo:number) {
    for(let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].codigo==codigo) {
        this.carrito.splice(i, 1);
        break;
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

}






