import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { getRidOfWhitespacePipe } from './shared/get-rid-of-whitespace.pipe';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movies-list/movie-detail/movie-detail.component';
import { ErrorComponent } from './shared/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NavigationComponent,
    DashboardComponent,
    MoviesListComponent,
    getRidOfWhitespacePipe,
    HomeComponent,
    MovieDetailComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
