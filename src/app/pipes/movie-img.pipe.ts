import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  transform( movie: any): any {

    const url = 'http://image.tmdb.org/t/p/w500';

    // console.log('estoy aqui ' + typeof movie);

    if (movie !== undefined && movie && movie !== null) {
      if ( movie.backdrop_path ) {
        return url + movie.backdrop_path;
      } else if ( movie.poster_path ) {
        return url + movie.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }

}
