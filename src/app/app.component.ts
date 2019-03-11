import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService, private router: Router) {
    if (!authService.isLoggedIn()) {
      router.navigate(['/']);
    }
  }
  signInWithEmail() {

    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        //console.log(res);
        this.router.navigate(['todos']);
      })
      .catch((err) => console.log('error: ' + err));
  }
  logout() {
    this.authService.logout();
  }
  ngOnInit() {}
}
