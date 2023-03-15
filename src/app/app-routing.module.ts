import { HeaderComponent } from './../components/Header/Header.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { InicioComponent } from 'src/components/Inicio/Inicio.component';
import { NotFoundComponent } from 'src/components/NotFound/NotFound.component';

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
  },
  {
    path: "*",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
