import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostsModule } from '@app/posts/posts.module';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';

export const usersRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: UserDetailComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, UserDetailComponent],
  imports: [
    CommonModule,
    PostsModule,
    SharedModule,
    RouterModule.forChild(usersRoutes),
  ],
})
export class UserModule {}
