import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
  providers: [NgbCarouselModule]

})
export class CarrosselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {
      imageUrl: '../../assets/txt.jpg',
      caption: 'Texto sobre a imagem 1'
    },
    {
      imageUrl: '../../assets/txtshow.jpg',
      caption: 'Texto sobre a imagem 2'
    },
  ];
}
