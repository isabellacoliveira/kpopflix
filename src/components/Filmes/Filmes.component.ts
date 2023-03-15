import { FilmesService } from './../../services/filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/models/filmes';

@Component({
  selector: 'app-Filmes',
  templateUrl: './Filmes.component.html',
  styleUrls: ['./Filmes.component.css']
})
export class FilmesComponent implements OnInit {
  showPopUp: boolean = false;
  grupos: Filmes[] = [];

  showOrhideFilterPopUp() {
    this.showPopUp = !this.showPopUp;
  }

  constructor(private service: FilmesService) { }

  ngOnInit() {
    this.getGrupos()
  }

  getGrupos(): void {
    this.service.getGruposKpop().subscribe((result) => {
      this.grupos = result;
      console.log(this.grupos)
    });
  }

}
