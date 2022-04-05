import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Post } from '../model/post';
import { Comment } from '../model/comment';
import { commentUpdated } from '../post.actions';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { PostService } from '@app/services/post.service';
import { Subscription } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { User } from '@app/auth/model/user';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss'],
})
export class CommentCreateComponent implements OnInit {
  commentForm!: FormControl;
  @Input() post!: Post;
  @Input() user!: User;
  @Output() commentEmit: EventEmitter<any> = new EventEmitter();

  replySubscription$?: Subscription;
  nameTag?: string;
  pComment?: Comment; // comment object from parent array of comment
  constructor(
    private store: Store<AppState>,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.commentForm = new FormControl('');

    this.replySubscription$ = this.postService
      .getReplyDTO()
      .subscribe((res: Comment) => {
        // get Parent comment in comment component through subject event
        console.log('COMMENT', res);
        this.nameTag = `@${res.author?.username} `;
        this.pComment = res;
        this.commentForm.patchValue(this.nameTag);
      });
  }

  onSubmit() {
    if (!this.commentForm.valid) {
      return;
    }
    const postId = this.post._id as string;
    const regex = new RegExp(this.nameTag as string, 'g');
    const comment: Comment = {
      parentId: postId,
      author: this.user,
      content: this.commentForm.value.replace(regex, '').trim(),
    };
    const pCommentId =
      this.pComment?.parentId !== postId
        ? this.pComment?.parentId
        : (this.pComment?._id as string);

    if (pCommentId && this.nameTag) {
      comment.replyTo = this.nameTag.trim();
      comment.parentId = pCommentId;
      this.updateSubComment(comment, postId, pCommentId);
    } else {
      this.updateComment(comment, postId);
    }

    this.commentForm.reset();
  }

  updateComment(comment: Comment, postId: string) {
    this.postService.addComment(comment, postId).subscribe({
      next: () => {
        console.log('Comment updated');
      },
      error: (err) => {
        console.log('Error occurred', err);
      },
    });
  }

  updateSubComment(comment: Comment, postId: string, commentId: string) {
    this.postService.addSubComment(comment, postId, commentId).subscribe({
      next: () => {
        console.log('Sub Comment updated');
      },
      error: (err) => {
        console.log('Error occurred', err);
      },
    });
  }

  ngOnDestroy() {
    if (this.replySubscription$) {
      this.replySubscription$.unsubscribe();
    }
  }
}
