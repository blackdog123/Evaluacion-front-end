import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductosComponent } from './productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { ValidacionComponent } from './validacion/validacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { BuscarComponent } from './buscar/buscar.component';
import  {MatIconModule} from '@angular/material/icon';
import { ComprarComponent } from './comprar/comprar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    FooterComponent,
    ValidacionComponent,
    FilterPipe,
    BuscarComponent,
    ComprarComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
