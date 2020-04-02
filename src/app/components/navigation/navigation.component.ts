import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

import { AuthService } from '../../containers/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(res => this.loggedIn = res);
  }

  onLogout() {
    this.auth.logout();
  }

}
