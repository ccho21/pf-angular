import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

import { ReactiveFormsModule } from '@angular/forms';

import { PostsResolver } from './posts.resolver';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './posts.effects';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './reducers/post.reducers';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { PipesModule } from './pipes/pipes.module';
import { PostNewComponent } from './post-new/post-new.component';
import { ComponentsModule } from '@app/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { PostEditDialogComponent } from './post-edit-dialog/post-edit-dialog.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';

export const postsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    component: PostComponent,
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
    HomeComponent,
    PostListComponent,
    PostComponent,
    CommentsComponent,
    PostNewComponent,
    PostEditDialogComponent,
    CommentCreateComponent,
  ],
  exports: [],
  entryComponents: [],
  providers: [PostsResolver],
})
export class PostsModule {
  constructor() {}
}
