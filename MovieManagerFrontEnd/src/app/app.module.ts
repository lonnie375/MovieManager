import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { UserProfileComponent } from './User-Profile/user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './Auth-Button/auth-button/auth-button.component';
import { MainComponent } from './Components/main/main.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchMovieComponent } from './Components/search-movie/search-movie.component';
import { NgXClickOutsideModule } from 'ngx-click-outside';
import { UserMovieListComponent } from './Components/user-movie-list/user-movie-list.component';



@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AuthButtonComponent,
    MainComponent,
    NavbarComponent,
    SearchMovieComponent,
    UserMovieListComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    AppRoutingModule, 
    NgXClickOutsideModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      //The domain and clientId were configured in the previous chapter 
      domain: 'dev-fssxdscxajvtly22.us.auth0.com',
      clientId: 'KfWPbRDJUGhWXUIdKX9THHIXWEOG1cal', 
     
      audience: 'https://movie-manager-api', 

      scope: 'read:current_user', 

      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://localhost:7245/api/Movies/AddNewUser', 
            tokenOptions: {
              audience: 'https://movie-manager-api'
            }
          }, 
          {
            uri: 'https://localhost:7245/api/Movies/CheckForUserName',
            tokenOptions: {
              audience: 'https://movie-manager-api'
            }
          }, 
          {
            uri: 'https://localhost:7245/api/Movies/AddMovieToUserList', 
            tokenOptions: {
              audience: 'https://movie-manager-api'
            }
          }, 
          {
            uri: 'https://localhost:7245/api/Movies/GetMoviesFromUserList', 
            tokenOptions: {
              audience: 'https://movie-manager-api'
            }
          }
        ]
      }


    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
