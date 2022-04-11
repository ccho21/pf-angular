import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
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
    path: 'posts',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '**',
    redirectTo: '/posts',
  }
];
