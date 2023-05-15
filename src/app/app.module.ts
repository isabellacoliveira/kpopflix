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
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosselComponent } from 'src/components/carrossel/carrossel.component';
import { RodapeComponent } from 'src/components/Rodape/Rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FilmesComponent,
    FilmeClickComponent,
    CarrosselComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
