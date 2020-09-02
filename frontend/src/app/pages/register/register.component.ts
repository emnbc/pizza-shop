import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { HttpHelperService } from '../../services/http-helper.service';

@Component({
  selector: 'nat-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;
  hide: boolean = true;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpHelperService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  submitRegister() {
    if(this.registerFormGroup.valid) {
      this.loading = true;
      this.http.create('users', this.registerFormGroup.value).subscribe((res) => {
        this.openSnackBar('Success!');
        setTimeout(() => {
          this.router.navigate(['/sign-in']);
          this.loading = false;
        }, 1000)
        console.log("OK", res);
      },(err) => {
        this.loading = false;
        this.openSnackBar('Something went wrong!');
        console.log("ERROR", err);
      });
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
