import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie';
import { MovieService } from './movie.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    movies: IMovie[] = [];
    filteredMovies: IMovie[];
    _filterName: string;

    get filterName() {
        return this._filterName;
    }
    
    set filterName(value: string) {
        this._filterName = value;
        this.filteredMovies = this.filterName ? this.execFilter(this.filterName) : this.movies;
    }

    constructor(private movieService : MovieService) { }

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

}