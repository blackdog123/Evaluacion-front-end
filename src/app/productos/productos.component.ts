import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Array<any> = [{marca:'LG', descripcion:'Televisor', precio: 250000, img:'./assets/images/tv.jpg'},
                          {marca:'Samsung', descripcion:'SmartPhone', precio: 450000, img:'./assets/images/phone.jpg'},
                          {marca:'Fensa', descripcion:'Refrigerador', precio: 450000, img:'./assets/images/refrigerador.jpg'},
                          {marca:'Mademsa', descripcion:'Cocina a gas', precio: 250000, img:'./assets/images/cocina.jpg'},
                          {marca:'Microsoft', descripcion:'Xbox Series X', precio: 780000, img:'./assets/images/xbox.jpg'},
                          {marca:'Sony', descripcion:'Play Station 5', precio: 680000, img:'./assets/images/play5.jpg'},
                        ]

  constructor() { }

  ngOnInit(): void {
  }

}
