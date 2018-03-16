import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Movie } from '../interfaces/movie.interface';
import 'rxjs/Rx'; // Map

@Injectable()
export class MoviesService {

  private apikey = 'a78e85a7551c3b9f2829b06f227fce72';
  public urlMoviedb = 'https://api.themoviedb.org/3';
  arrayMoviesSearched: Movie[] = [];


  constructor( private jsonp: Jsonp ) { }

  getInTheatres() {

    const until = new Date();
    const since = new Date();
    until.setMonth( until.getDay() + 7 );

    const untilString = `${ until.getFullYear() }-${ until.getMonth() + 1 }-${ until.getDate() }`;
    const sinceString = `${ since.getFullYear() }-${ since.getMonth() + 1 }-${ since.getDate() }`;

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ sinceString }&primary_release_date.lte=${ untilString }&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map( response => response.json().results );

  }

  getPopulars() {

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map( response => response.json().results );
  }

  getPopularsKids() {

    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map( response => response.json().results );
  }

  searchMovie( search: string ) {

    const url = `${ this.urlMoviedb }/search/movie?query=${ search }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).map( response => {
      this.arrayMoviesSearched = response.json().results;
      return response.json().results;
    });
  }

  getMovieDB( id: string) {

    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map( response => response.json() );
  }
}
