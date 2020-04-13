import { Component, OnInit, OnDestroy } from "@angular/core";
import { IMovie } from "../../models/movie";
import { MovieService } from "./movie.service";
import { BehaviorSubject, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { subscribeOn } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  movies: IMovie[] = [];
  filteredMovies: IMovie[];
  _filterName: string;

  arrowSort: boolean = true;

  subs: Subscription;

  displayedColumns: string[] = ["id", "title", "director", "price"];

  // state = new BehaviorSubject(this.filteredMovies);
  // movies$ = this.state.asObservable();

  get filterName() {
      return this._filterName;
  }

  set filterName(value: string) {
      this._filterName = value;
      this.filteredMovies = this.filterName ? this.searchName(this.filterName) : this.movies;
  }

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.subs = this.movieService.getMovies().subscribe((res) => {
      this.movies = res;
      this.filteredMovies = this.movies;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  searchName(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter(movie => movie.title.toLocaleLowerCase().trim().includes(filterBy));
  }

  // FILTER METHOD
  execFilter(filterBy: string) {
    if (filterBy === "all") {
      this.filteredMovies = this.movies;
    } else if (filterBy === "active") {
      this.filteredMovies = this.movies.filter(
        (movie) => movie.active === true
      );
    } else if (filterBy === "noactive") {
      this.filteredMovies = this.movies.filter(
        (movie) => movie.active === false
      );
    }
  }

    // SORT METHOD
  onSortPrice() {
    this.filteredMovies.sort(this.sortByPrice.bind(this));
    this.arrowSort = !this.arrowSort;
  }

  sortByPrice(movie1: IMovie, movie2: IMovie) {
    // price from min to max
    if (this.arrowSort) {
      return movie1.price - movie2.price;
    } else {
      // price from max to min
      return movie2.price - movie1.price;
    }
  }

  onSortTitle() {
    this.filteredMovies.sort(this.sortByTitle.bind(this));
    this.arrowSort = !this.arrowSort;
  }

  sortByTitle(movie1: IMovie, movie2: IMovie) {
    // title from A to Z
    if (this.arrowSort) {
      if (movie1.title > movie2.title) return 1;
      else if (movie1.title === movie2.title) return 0;
      else return -1;
    } else {
      // title from Z to A
      if (movie1.title < movie2.title) return 1;
      else if (movie1.title === movie2.title) return 0;
      else return -1;
    }
  }

  onDetail(movie: IMovie) {
    console.log(movie);
    // const convertObj = JSON.stringify(movie)
    // this.router.navigate(["/dashboard", movie.id], {queryParams: {movie: convertObj}});
    this.router.navigate(["/dashboard", movie.id]);
  }
}

// function sortByPrice(movie1: IMovie, movie2: IMovie) {
//     // price from min to max
//     return movie1.price - movie2.price;
// }

// function sortByTitle (movie1: IMovie, movie2: IMovie) {
//     // title from A to Z
//     if (movie1.title > movie2.title) return 1;
//     else if (movie1.title === movie2.title) return 0;
//     else return -1;
// }
