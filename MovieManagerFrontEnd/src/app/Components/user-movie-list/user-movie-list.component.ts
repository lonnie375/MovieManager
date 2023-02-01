import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/movie';
import { Moviecategory } from 'src/app/Interfaces/moviecategory';
import { LocalAPIService } from 'src/app/Services/local-api.service';

@Component({
  selector: 'app-user-movie-list',
  templateUrl: './user-movie-list.component.html',
  styleUrls: ['./user-movie-list.component.css']
})
export class UserMovieListComponent implements OnInit {

  constructor(private service: LocalAPIService) { }

  userMovieList: Movie[] = [];

  movie: Movie | undefined; 

  category = Moviecategory; 

  role = Moviecategory; 

  keys() : Array<string>{
    var keys = Object.keys(this.role); 
    return keys.slice(keys.length / 2); 
  }

  ngOnInit(): void {
    this.GetAllMoviesFromUserList(); 
  }

  GetAllMoviesFromUserList(){
    this.service.GetMoviesFromUserList().subscribe((data: Movie[]) => this.userMovieList = data);
   
  }

  UpdateCategory(id: number, category: string){
    var test: Moviecategory = category as unknown as Moviecategory; 
    this.service.UpdateCategory(id, test).subscribe((data: Movie) => this.movie = data); 
    location.reload();  
  }

  DeleteMovieFromUserList(id:number){
    this.service.DeleteMovieFromUserList(id).subscribe((data: Movie) =>this.movie = data); 
    location.reload(); 
  }

}
