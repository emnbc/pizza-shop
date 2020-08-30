import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpHelperService } from '../../services/http-helper.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'nat-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loading: boolean = false;
  error: boolean = false;
  hide: boolean = true;
  authData: User = new User();

  usernameControl = new FormControl(null, [Validators.minLength(3)]);
  passwordControl = new FormControl(null, [Validators.minLength(3)]);

  constructor(
    private auth: AuthService,
    private http: HttpHelperService,
    private router: Router
  ) { }

  login() {
    this.loading = true;
    this.error = false;
    this.http.login(this.authData).subscribe(res => {
      if(res.accessToken) {
        this.auth.setTokenToStorage(res.accessToken);
        this.http.find<User>('auth/me').subscribe(res => {
          this.auth.user$.next(new User(res.body));
          this.loading = false;
          this.router.navigate(['/profile']);
        }, () => {
          this.error = true;
          this.loading = false;
        });
      } else {
        this.error = true;
      }
    }, () => {
      this.error = true;
      this.loading = false;
    });
  }

}