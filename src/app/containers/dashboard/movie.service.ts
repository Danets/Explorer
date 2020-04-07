import { Injectable } from '@angular/core';
import { IMovie } from '../../models/movie';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class MovieService {
    url = "api/movies/movies.json"
    constructor(private httpClient: HttpClient) { }
    
    getMovies(): Observable<IMovie[]> {
        return this.httpClient.get<IMovie[]>(this.url);
    }

    getMovie(id: number): Observable<IMovie> {
        return this.httpClient.get<IMovie>(`this.url/${id}`);
    }
}