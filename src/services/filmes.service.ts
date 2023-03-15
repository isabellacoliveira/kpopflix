import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from 'src/models/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  constructor(private http: HttpClient) { }

  getGruposKpop(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(
      'http://localhost:3000/filmes'
    );
  }
}
