import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: "", component: ProductosComponent},
  {path: "productos", component: ProductosComponent},
  {path: "buscar-producto", component: BuscarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
