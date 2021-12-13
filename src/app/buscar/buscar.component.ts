import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  productos:Array<any> = [{marca:'LG', descripcion:'Televisor', precio: 250000, img:'./assets/images/tv.jpg'},
  {marca:'Samsung', descripcion:'SmartPhone', precio: 450000, img:'./assets/images/phone.jpg'},
  {marca:'Fensa', descripcion:'Refrigerador', precio: 450000, img:'./assets/images/refrigerador.jpg'},
  {marca:'Mademsa', descripcion:'Cocina a gas', precio: 250000, img:'./assets/images/cocina.jpg'},
  {marca:'Microsoft', descripcion:'Xbox Series X', precio: 780000, img:'./assets/images/xbox.jpg'},
  {marca:'Sony', descripcion:'Play Station 5', precio: 680000, img:'./assets/images/play5.jpg'},
  ]

  constructor() { }

  dataSource: any;

  ngOnInit(): void {
  this.dataSource = new MatTableDataSource(this.productos);

  }

  columnas: string[] = ['marca','descripcion','precio', 'img'];


  filtrar(event: Event) {
  const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim()
  }
}
