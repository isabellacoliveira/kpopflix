import { FilmeClickComponent } from './../components/filmeClick/filmeClick.component';
import { FilmesComponent } from './../components/Filmes/Filmes.component';
import { InicioComponent } from 'src/components/Inicio/Inicio.component';
import { HeaderComponent } from './../components/Header/Header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FilmesComponent,
    FilmeClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
