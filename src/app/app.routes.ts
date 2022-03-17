import { Routes } from '@angular/router';
// import { AuthGuard } from "../../shared/guard/auth.guard";

// import { MainComponent } from './containers/main/main.component';
// Import all the components for which navigation service has to be activated

// import { VerifyEmailComponent } from './containers/auth/verify-email/verify-email.component';
// import { ForgotPasswordComponent } from './containers/auth/forgot-password/forgot-password.component';
// import { SecureInnerPagesGuard } from './core/guard/secure-inner-pages.guard';
// import { UserComponent } from './user/user.component';
// import { AppComponent } from './app.component';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { AuthGuard } from './core/guard/auth.guard';
// import { AboutComponent } from './components/about/about.component';

import { MainComponent } from '@app/pages/main/main.component';

export const rootRouterConfig: Routes = [
  {
    path: '', component: MainComponent, pathMatch: 'full'
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'user/:id', component: UserComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPasswordComponent,
  //   canActivate: [SecureInnerPagesGuard]
  // },
  // {
  //   path: 'login',
  //   component: SignInComponent
  // },
  // {
  //   path: 'sign-up',
  //   component: SignUpComponent
  // },
  // {
  //   path: 'verify-email-address',
  //   component: VerifyEmailComponent,
  //   canActivate: [SecureInnerPagesGuard]
  // },
  // { path: '**', component: MainComponent } // temporary
];
