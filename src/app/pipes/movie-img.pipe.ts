import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  transform( movie: any, poster: boolean = false): any {

    const url = 'http://image.tmdb.org/t/p/w500';

    // console.log('estoy aqui ' + typeof movie);

    if (movie !== undefined && movie && movie !== null) {
      if ( poster ) {
        return url + movie.poster_path;
      } else if ( movie.backdrop_path ) {
        return url + movie.backdrop_path;
      } else if ( movie.poster_path ) {
        return url + movie.poster_path;
      } else {
        console.log('return nothing')
        return 'assets/img/noimage.png';
      }
    }
  }

}
