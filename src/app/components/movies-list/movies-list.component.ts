import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../models/movie';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'director', 'price'];
  // @Input() movies:  IMovie[];
  data: IMovie[];

// ngOnChanges(changes: SimpleChanges): void {
//   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
//   //Add '${implements OnChanges}' to the class.
//   console.log(changes);
//   console.log(this.movies);
// }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data.movies;
    console.log(this.data);
  }

}
