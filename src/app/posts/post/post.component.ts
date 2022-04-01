import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { getCurrentUser } from '@app/auth/auth.selectors';
import { User } from '@app/auth/model/user';
import { AppState } from '@app/reducers';
import { PostService } from '@app/services/post.service';
import { defaultDialogConfig } from '@app/shared/default-dialog-config';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Like } from '../model/like';
import { Post } from '../model/post';
import { PostEditDialogComponent } from '../post-edit-dialog/post-edit-dialog.component';
import { selectPost } from '../posts.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Output()
  default: string =
    'https://firebasestorage.googleapis.com/v0/b/bulletin-board-d1815.appspot.com/o/uploads%2F1582746081704_ayo-ogunseinde-2.jpg?alt=media&token=cbc87b46-e85a-4de3-93c3-416dd289b2f1';
  post$?: Observable<Post>;
  postId?: string | undefined;

  user$?: Observable<User>;
  isLiked?: boolean;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.reload();
  }
  // INIT FUNCTION
  reload() {
    this.postId = this.route.snapshot.paramMap.get('id') as string;

    if (this.postId) {
      this.post$ = this.store.pipe(select(selectPost(this.postId)));
      this.user$ = this.store.pipe(select(getCurrentUser)) as Observable<User>;
    }
  }

  // POST FUNCTIONS
  editPost(post: Post) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Post',
      post,
      mode: 'update',
    };

    this.dialog
      .open(PostEditDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        console.log('dialog is done');
        // this.reload()
      });
  }

  // LIKE FUNCTIONS
  isPostLiked(post: Post, userId?: string) {
    return this.postService.isLikedByUser(post, userId);
  }

  // UI FUNCTIONS
  openActionModal(component: any) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Post',
      mode: 'update',
    };
    this.dialog
      .open(component, {
        panelClass: 'custom-no-padding-container',
        data: dialogConfig,
      })
      .afterClosed()
      .subscribe(() => {});
  }

  openLikes(component: any) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Likes',
    };
    this.dialog
      .open(component, {
        panelClass: 'custom-no-padding-container',
        data: dialogConfig,
      })
      .afterClosed()
      .subscribe(() => {});
  }
}
