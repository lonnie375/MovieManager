import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { UserProfileComponent } from './User-Profile/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './Auth-Button/auth-button/auth-button.component';
import { MainComponent } from './Components/main/main.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchMovieComponent } from './Components/search-movie/search-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AuthButtonComponent,
    MainComponent,
    NavbarComponent,
    SearchMovieComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    AppRoutingModule, 
    AuthModule.forRoot({
      //The domain and clientId were configured in the previous chapter 
      domain: 'dev-fssxdscxajvtly22.us.auth0.com',
      clientId: 'KfWPbRDJUGhWXUIdKX9THHIXWEOG1cal', 
      authorizationParams: {
        redirect_uri: window.location.origin
      }


    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
