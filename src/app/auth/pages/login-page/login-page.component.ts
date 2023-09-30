import { Component } from '@angular/core';
import { AuthService } from '../../services/auht.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor (
    private authService: AuthService,
    private router: Router
    ){}

  onLogin():void   {
    this.authService.login('ignacio.follente@gmail.com', '211123')
      .subscribe (user => {
        this.router.navigate(['/']);
      });
  }
}
