import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = { };

  constructor(private authService: AuthService) { }

  ngOnInit(): any {
  }

  login(): any {
    this.authService.login(this.model).subscribe(next => {
      console.log('You\'re a pro.  You logged in successfully.');
    }, error => {
      console.log(error);
    });
  }

  loggedIn(): any {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): any {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
