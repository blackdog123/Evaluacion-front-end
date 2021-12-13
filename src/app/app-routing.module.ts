import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: ProductosComponent},
  {path: "registro", component: RegistroComponent},
  {path: "productos", component: ProductosComponent},
  {path: "buscar-producto", component: BuscarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
