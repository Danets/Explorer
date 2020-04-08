import { Injectable } from '@angular/core';
import { IMovie } from '../../models/movie';
import { Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class MovieService {
    url = "api/movies/movies.json";
    observer = new Subject();
    subscriber$ = this.observer.asObservable();

    constructor(private httpClient: HttpClient) { }
    
    getMovies(): Observable<IMovie[]> {
        return this.httpClient.get<IMovie[]>(this.url);
    }
}