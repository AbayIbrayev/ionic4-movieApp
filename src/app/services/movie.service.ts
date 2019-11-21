import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment, API_KEY } from '../../environments/environment';

export enum SearchType {
  all = '',
  movie = '',
  series = '',
  episode = '',
  game = '',
} 

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';

  // HERE IS WHERE THE API_KEY VARIABLE IS USED FROM THE ENVIRONMENTS FOLDER
  apiKey = API_KEY;
  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
