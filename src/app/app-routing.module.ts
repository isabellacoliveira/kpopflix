import { HeaderComponent } from './../components/Header/Header.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { InicioComponent } from 'src/components/Inicio/Inicio.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
