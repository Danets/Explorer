import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MovieService } from '../../containers/dashboard/movie.service';

import { Observable } from 'rxjs';
import { IMovie } from '../../models/movie';

@Injectable({ providedIn: 'root' })
export class MoviesResolverService implements Resolve<IMovie[]> {
  constructor(private movieService : MovieService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<IMovie[]> {
    return this.movieService.getMovies();
  }
}