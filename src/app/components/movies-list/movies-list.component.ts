import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'director', 'price'];
  @Input() movies:  IMovie[];

  constructor() { }

  ngOnInit(): void {
  }

}
