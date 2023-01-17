import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { UserProfileComponent } from './User-Profile/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
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


    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
