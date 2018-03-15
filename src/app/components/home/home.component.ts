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
      console.log('In Theatres')
      console.log(response.results);
      this.arrayInTheatres = response.results;
      return response;
    });

    this.ms.getPopulars().subscribe( response => {
      console.log('Populars')
      console.log(response.results);
      this.arrayPopulars = response.results;
      return response;
    });

    this.ms.getPopularsKids().subscribe( response => {
      console.log('Populars for Kids')
      console.log(response.results);
      this.arrayPopularsKids = response.results;
      return response;
    });

  }

  ngOnInit() {
  }

}
