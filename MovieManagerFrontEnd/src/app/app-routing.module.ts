import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { SearchMovieComponent } from './Components/search-movie/search-movie.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { UserMovieListComponent } from './Components/user-movie-list/user-movie-list.component';

const routes: Routes = [
  {path: "main", component: MainComponent}, 
  {path: '', redirectTo: 'main', pathMatch: 'full'}, 
  {path: "searchMovie", component:SearchMovieComponent, canActivate:[AuthGuard]},
  {path: "userMovieList", component:UserMovieListComponent, canActivate:[AuthGuard]}, 
  //{path: "userMoviesByCategory", component:UserMoviesByCategoryComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
