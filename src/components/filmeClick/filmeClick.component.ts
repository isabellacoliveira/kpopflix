import { Component, Input, OnInit } from '@angular/core';
import { Filmes } from 'src/models/filmes';
import { FilmesService } from 'src/services/filmes.service';

@Component({
  selector: 'app-filmeClick',
  templateUrl: './filmeClick.component.html',
  styleUrls: ['./filmeClick.component.css']
})
export class FilmeClickComponent implements OnInit {
  showPopUp: boolean = false;
  grupos: Filmes | undefined;
  @Input() nomeGrupo: string | any;
  @Input() imagemCapa: string | any;
  @Input() quantidadeMvs: number | any;

  showOrhideFilterPopUp() {
    this.showPopUp = !this.showPopUp;
  }

  constructor(private service: FilmesService) { }

  ngOnInit() {
    this.getGrupos();
    console.log('laksdjaksljd')
    console.log(this.imagemCapa)
  }

  getGrupos(): void {
    this.service.getGrupos().subscribe((result) => {
      this.grupos = result;
      console.log(this.grupos)
    });
  }

  pegaDetalhes(){
    console.log("hello world!");
  }

}
