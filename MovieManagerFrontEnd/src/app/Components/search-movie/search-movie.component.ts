import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieApi } from 'src/app/Interfaces/movie-api';
import { Moviecategory } from 'src/app/Interfaces/moviecategory';
import { Result } from 'src/app/Interfaces/result';
import { LocalAPIService } from 'src/app/Services/local-api.service';
import { ThirdPartyApiService } from 'src/app/Services/third-party-api.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private service: ThirdPartyApiService, private ourService: LocalAPIService, private _router: Router) { }

  ngOnInit(): void {
  }

  movieAPI: MovieApi | undefined; 
  movie: Movie | undefined; 

  submitForm(form: any){
    console.log(form); 
    this.service.SearchThirdParty(form.value["movieSearch"]).subscribe((data:MovieApi) => this.movieAPI = data); 
    form.reset(); 
  }

  AddMovieToUserList(result: Result) {
    console.log(result); 

    // Post this list then redirect 

    this.ourService.AddMovieToUserList({imdbId : result.id, title : result.title, auth0Id : "", id : 0, category : Moviecategory.Action}).subscribe((data : Movie) => {this.movie = data; this._router.navigate(["/userMovieList"])}); 
  }
  

}
