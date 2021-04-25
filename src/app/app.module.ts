import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { WatchlistPageComponent } from './components/watchlist-page/watchlist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviesComponent,
    SearchCriteriaComponent,
    WatchlistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
