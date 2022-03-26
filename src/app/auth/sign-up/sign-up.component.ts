import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../model/user';

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
    this.form = this.fb.group(
      {
        email: ['test@test.com', [Validators.required]],
        password: ['123456', [Validators.required]],
        confirmPassword: ['123456', [Validators.required]],
        firstname: ['test firstname', [Validators.required]],
        lastname: ['test lastname', [Validators.required]],
      },
      { validators: this.checkPasswords }
    );
  }

  checkPasswords: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const pw = control.get('password')?.value;
    const confirmPw = control.get('confirmPassword')?.value;
    // console.log('### pw', pw);
    // console.log('### confirm PW', confirmPw);
    return pw === confirmPw ? null : { notSame: true };
  };

  signup(): void {
    console.log('signup function', this.form);
    if (!this.form.valid) {
      return;
    }
    const { email, password, firstname, lastname } = this.form.value;
    this.authService.signup(email, password, firstname, lastname).subscribe({
      next: () => {
        this.router.navigateByUrl('/posts');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
