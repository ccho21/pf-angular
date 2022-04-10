import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { PostsResolver } from './posts/posts.resolver';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },

  {
    path: 'posts',
    component: HomeComponent,
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
    canActivate: [AuthGuard],
    resolve: {
      posts: PostsResolver,
    },
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
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
];
