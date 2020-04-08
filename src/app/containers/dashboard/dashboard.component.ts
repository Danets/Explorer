import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie';
import { MovieService } from './movie.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
    movies: IMovie[] = [];
    filteredMovies: IMovie[];
    _filterName: string;

    displayedColumns: string[] = ['id', 'title', 'director', 'price'];

    // state = new BehaviorSubject(this.filteredMovies);
    // movies$ = this.state.asObservable();

    get filterName() {
        return this._filterName;
    }
    
    set filterName(value: string) {
        this._filterName = value;
        this.filteredMovies = this.filterName ? this.execFilter(this.filterName) : this.movies;
    }

    constructor(private movieService : MovieService, private router: Router) { }

    ngOnInit() { 
        this.getMovies();
    }

    getMovies() {
        this.movieService.getMovies().subscribe(res => {
            this.movies = res;
            this.filteredMovies = this.movies;
        })
    }

    // FILTER METHOD
    execFilter(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.movies.filter(movie => movie.title.toLocaleLowerCase().trim().includes(filterBy));
    }

    onDetail(movie: IMovie) {
        console.log(movie)
        const convertObj = JSON.stringify(movie)
        // this.router.navigate(["/dashboard", movie.id], {queryParams: {movie: convertObj}});
        this.router.navigate(["/dashboard", movie.id]);
    }

}