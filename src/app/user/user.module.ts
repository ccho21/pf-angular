import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { UserResolver } from './user.resolver';

import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '@app/posts/posts.effects';
import { PostsModule } from '@app/posts/posts.module';
import { PostListComponent } from '@app/posts/post-list/post-list.component';
import { postsReducer } from '@app/posts/reducers/post.reducers';

export const usersRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: UserDetailComponent,
    resolve: {
      posts: UserResolver,
    },
  },
];

@NgModule({
  declarations: [HomeComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(usersRoutes),
    PostsModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [UserResolver],
})
export class UserModule {}
