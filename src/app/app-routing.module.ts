import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailComponent } from './components/movies-list/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './shared/error/error.component';

import { MoviesResolverService } from './components/movies-list/movies-resolver.service';

import { AuthGuard } from './containers/auth/auth.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  // { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: MovieDetailComponent },
  { path: 'movies', component: MoviesListComponent, resolve: {movies: MoviesResolverService} },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent, data: {error: "There is no data!!!"} },
  { path: '**', pathMatch: 'full', redirectTo: 'error' }
  // { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }