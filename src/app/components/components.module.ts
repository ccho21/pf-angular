import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';

import { UploadFilesComponent } from '@app/components/upload-files/upload-files.component';
import { CommentComponent } from './comment/comment.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { LikesComponent } from './likes/likes.component';
import { CommentsComponent } from './comments/comments.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    UploadFilesComponent,
    CommentComponent,
    CommentCreateComponent,
    LikesComponent,
    CommentsComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
  ],
  exports: [
    UploadFilesComponent,
    CommentComponent,
    CommentCreateComponent,
    LikesComponent,
    CommentsComponent,
    PostListComponent,
  ],
})
export class ComponentsModule {}
