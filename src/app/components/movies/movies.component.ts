import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html'
})

export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieService: MovieService) {
    this._movieService.getInTheaters()
      .subscribe(res => {
        this.popularList = res.results;
      });

    this._movieService.getInTheaters()
      .subscribe(res => {
        this.theatersList = res.results;
      });
  }

  searchMovies() {
    this._movieService.searchMovies(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.results;
      });
  }

  ngOnInit(){

  } //
}
