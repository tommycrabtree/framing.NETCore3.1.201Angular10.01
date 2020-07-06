import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = { };

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): any {
  }

  login(): any {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('You\'re a pro.  You logged in successfully.');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn(): any {
    return this.authService.loggedIn();
  }

  logout(): any {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
