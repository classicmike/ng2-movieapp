import {Injectable} from "@angular/core";
import {Jsonp} from '@angular/http';

import 'rxjs/Rx';

@Injectable()

export class MovieService {
  apiKey: string;

  constructor(private _jsonp: Jsonp) {
    this.apiKey = '6dcb15cec0658f5c3b095fdd60221004';
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-09-26&primary_release_date.lte=2016-10-30&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  searchMovies(searchStr: string){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  getMovie(id: string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
      .map(res => res.json());
  }
}
