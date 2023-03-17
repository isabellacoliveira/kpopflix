import { MvsEmAltaComponent } from './../components/MvsEmAlta/MvsEmAlta.component';
import { MinhaListaComponent } from './../components/MinhaLista/MinhaLista.component';
import { HeaderComponent } from './../components/Header/Header.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { InicioComponent } from 'src/components/Inicio/Inicio.component';
import { NotFoundComponent } from 'src/components/NotFound/NotFound.component';
import { GrupoIndividualComponent } from 'src/components/GrupoIndividual/GrupoIndividual.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: "grupo/:grupoNome",
        component: GrupoIndividualComponent
      },
      {
        path: "minha-lista",
        component: MinhaListaComponent
      },
      {
        path: "mvs-em-alta",
        component: MvsEmAltaComponent
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
