import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['test@test.com', [Validators.required]],
      password: ['123456', [Validators.required]],
      password2: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
    });
  }
  get email() {
    return this.form.get('email')!;
  }
  get password() {
    return this.form.get('password')!;
  }
  get password2() {
    return this.form.get('password2')!;
  }
  get firstname() {
    return this.form.get('firstname')!;
  }
  get lastname() {
    return this.form.get('lastname')!;
  }

  getErrorMessage() {
    console.log("asdfasdf??");
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  signup(): void {
    const val = this.form.value;
    console.log('working?', val);
    this.authService.login(val.email, val.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/posts');
      },
      error: (error) => {
        console.log(error);
        error.errors.forEach((cur: any) => {
          alert(cur.msg);
        });
      },
    });
  }
}
