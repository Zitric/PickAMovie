import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../provider/movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  arrayInTheatres: Movie[] = [];

  arrayPopulars: Movie[] = [];

  arrayPopularsKids: Movie[] = [];

  constructor( public ms: MoviesService) {

    this.ms.getInTheatres().subscribe( response => {
      this.arrayInTheatres = response;
    });

    this.ms.getPopulars().subscribe( response => {
      this.arrayPopulars = response;
    });

    this.ms.getPopularsKids().subscribe( response => {
      this.arrayPopularsKids = response;
    });

  }

  ngOnInit() {
  }

}
