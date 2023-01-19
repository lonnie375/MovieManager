import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { LocalAPIService } from 'src/app/Services/local-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: LocalAPIService, public auth: AuthService) { }

  newUser: User | undefined; 
  userName: User | undefined; 

  userExists: boolean = false; 

  ngOnInit(): void {
    this.CheckForUserName(); 
  }

  CheckForUserName(){
    this.service.CheckForUserName().subscribe((data:boolean) => this.userExists = data); 
  }

  AddNewUser(form:any){
    this.service.AddNewUser({id:0, authId: "", userName: form.value["userCreation"]}).subscribe((data:User) => {this.newUser = data; window.location.reload()}); 
  }
}
