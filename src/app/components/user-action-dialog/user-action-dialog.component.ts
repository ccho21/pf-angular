import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '@app/posts/model/post';
import { PostEditDialogComponent } from '@app/posts/post-edit-dialog/post-edit-dialog.component';
import { defaultDialogConfig } from '@app/shared/default-dialog-config';

@Component({
  selector: 'app-user-action-dialog',
  templateUrl: './user-action-dialog.component.html',
  styleUrls: ['./user-action-dialog.component.scss'],
})
export class UserActionDialogComponent implements OnInit {
  @Input() post?: Post;
  @Input() userId?: string;

  isSameAuthor: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.isSameAuthor = this.post?.author?._id === this.userId ? true : false;
  }

  // POST FUNCTIONS
  editPost(post?: Post) {
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
      });
  }
  deletePost(post?: Post) {}

  // UI FUNCTIONS
  openActionModal(component: any) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Post',
      mode: 'update',
    };
    dialogConfig.panelClass = 'custom-no-padding-container';

    this.dialog
      .open(component, dialogConfig)
      .afterClosed()
      .subscribe(() => {});
  }
}
