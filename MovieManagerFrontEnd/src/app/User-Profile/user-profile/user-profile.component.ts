import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
  <ul *ngIf="auth.user$ | async as user">
  <li>{{ user.name }}</li>
  <li>{{ user.email }}</li>
</ul>  
  `,
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
