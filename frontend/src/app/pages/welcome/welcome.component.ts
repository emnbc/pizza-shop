import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nat-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

constructor(private router: Router) { }

  toSignIn() {
    this.router.navigate(['sign-in']);
  }

}
