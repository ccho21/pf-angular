import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { PostsResolver } from './posts.resolver';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './posts.effects';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './reducers/post.reducers';
import { PipesModule } from '../shared/pipes/pipes.module';
import { PostNewComponent } from './post-new/post-new.component';
import { ComponentsModule } from '@app/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { PostEditDialogComponent } from './post-edit-dialog/post-edit-dialog.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MainComponent } from './main/main.component';

export const postsRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
  {
    path: 'create',
    component: PostNewComponent,
  },
  {
    path: ':id',
    component: PostDetailComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(postsRoutes),
    EffectsModule.forFeature([PostsEffects]),
    StoreModule.forFeature('posts', postsReducer),
    PipesModule,
    ComponentsModule,
    SharedModule,
  ],
  declarations: [
    PostDetailComponent,
    PostNewComponent,
    PostEditDialogComponent,
    PostDetailComponent,
    MainComponent,
  ],
  exports: [],
  entryComponents: [],
  providers: [PostsResolver],
})
export class PostsModule {
  constructor() {}
}
