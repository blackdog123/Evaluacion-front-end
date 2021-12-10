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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    FooterComponent,
    ValidacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
