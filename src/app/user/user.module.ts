import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { MainComponent } from './main/main.component';
import { UserResolver } from './user.resolver';
import { PostsModule } from '@app/posts/posts.module';

export const usersRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':id',
    component: UserDetailComponent,
    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  declarations: [UserDetailComponent, MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(usersRoutes),
    PostsModule
  ],
})
export class UserModule {}
