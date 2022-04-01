import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/reducers';
import { PostService } from '@app/services/post.service';
import { defaultDialogConfig } from '@app/shared/default-dialog-config';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  post$!: Observable<Post>;
  postId?: string | undefined;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.reload();
  }
  reload() {
    this.postId = this.route.snapshot.paramMap.get('id') as string;

    this.post$ = this.store.pipe(select(selectPost(this.postId)));
    // if (!this.post$) {
    //   this.post$ = this.postService.findPostById(this.postId);
    // }
  }

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
}
