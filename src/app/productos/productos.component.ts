import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  prod ={
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


  constructor() { }


  ngOnInit(): void {
  }

 
  eliminar(codigo:number) {
    for(let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo==codigo) {
        this.productos.splice(i,1)
      }
    }
  }

  seleccionar(prod:{marca:string;descripcion:string;precio:number; codigo:number}){
    this.prod.marca = prod.marca;
    this.prod.descripcion = prod.descripcion;
    this.prod.precio = prod.precio;
    this.prod.codigo = prod.codigo;
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
    
    for(let i=0; i<this.productos.length;i++){
      if(this.productos[i].codigo == this.prod.codigo){
        alert("Ya se encuentra un producto con ese código");
        return;
      }
    }
    this.productos.push(this.prod);
    
    alert("Producto agregado");
  }

  filterDatos = undefined;

}






