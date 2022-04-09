import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
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

// import { MainComponent } from '@app/pages/main/main.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '**',
    redirectTo: '/',
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
  //   path: 'verify-email-address',
  //   component: VerifyEmailComponent,
  //   canActivate: [SecureInnerPagesGuard]
  // },
  // { path: '**', component: MainComponent } // temporary
];
