import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieApi } from '../Interfaces/movie-api';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {

  constructor(private client:HttpClient) { }

  SearchThirdParty(searchTerm:string) : Observable<MovieApi>{
    let movieList = this.client.get<MovieApi>(environment.apiUrl + "/Movies/SearchThirdParty?searchTerm=" + searchTerm); 

    return movieList; 
  }
}
