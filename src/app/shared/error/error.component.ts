import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
data: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 1) Static Case
    // this.data = this.route.snapshot.data['error'];
    // 2) Dinamic Case
    this.route.data.subscribe((data: Data) => this.data = data['error']);
  }

}
