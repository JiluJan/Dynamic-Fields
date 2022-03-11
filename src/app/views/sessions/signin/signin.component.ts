import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { CustomValidators } from 'ngx-custom-validators';
import { FingerprintComponent } from '../fingerprint/fingerprint.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  userId: any;

  constructor(private fb: FormBuilder, private router: Router, private jwtService: JwtAuthService, public dialog: MatDialog) { }

  ngOnInit() {

    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signinForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: password,
        agreed: [false, Validators.required]
      }
    );
  }

  onSubmit() {
    if (!this.signinForm.invalid) {
      // do what you wnat with your data
      console.log(this.signinForm.value, );
      this.userId = this.signinForm.value.email;
      localStorage.setItem("userId", this.userId);
      this.jwtService.signin().subscribe((res: any) => {
        this.router.navigateByUrl('/others/dynamic-fields');
      }, err => console.error("Err", err));

    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(FingerprintComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
