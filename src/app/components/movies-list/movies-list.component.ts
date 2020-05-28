import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { IMovie } from '../../models/movie';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'director', 'price'];
  movies: IMovie[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // 1) Static Case
    // this.movies = this.route.snapshot.data.movies;
    // 2) Dinamic Case
    this.route.data.subscribe((data: Data) => this.movies = data['movies']);

    console.log(this.movies);
  }

}
