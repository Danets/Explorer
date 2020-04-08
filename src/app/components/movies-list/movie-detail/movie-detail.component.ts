import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../../models/movie';
import { MovieService } from '../../../containers/dashboard/movie.service';
import { Observable, pipe } from 'rxjs';
// import { map, find, filter } from 'rxjs/operators';
import { switchMap, find } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
movie: IMovie;

  constructor(private movieService : MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    // There were used Query Params
    // this.route.queryParams.subscribe(data => {
    //   this.movie = JSON.parse(data.movie);
    // })

    // There were used router params
   const id = +this.route.snapshot.params["id"];

  // Dimamic changing params: 
  // 1) 
    // this.route.params.subscribe(data => console.log('Params: ', data));

  // 2)
  //  this.route.paramMap.pipe(
  //   switchMap(params => params.get('id'))
  //  ).subscribe(data => this.id = +data);

  // Here is we found movie by id 
   this.movieService.getMovies().subscribe(res => {
     this.movie = res.find(movie => movie.id === id);
   console.log('Movie: ', this.movie);
   });

  // this.movieService.getMovies()
  // .pipe(find(movie => movie.id === id))
  // .subscribe(movie => console.log('Movie: ', movie))
  
  }

}
