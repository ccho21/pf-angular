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

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss'],
})
export class CommentCreateComponent implements OnInit {
  commentForm!: FormControl;
  @Input() comment!: Comment;
  @Input() post!: Post;
  @Output() commentEmit: EventEmitter<any> = new EventEmitter();

  replySubscription$?: Subscription;
  nameTag?: string;
  commentId?: string;

  constructor(
    private store: Store<AppState>,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.commentForm = new FormControl('');

    this.replySubscription$ = this.postService
      .getReplyDTO()
      .subscribe((res: Comment) => {
        console.log('### REPLY!!!', res);
        this.nameTag = `@${res.username} `;
        this.commentId = res._id;
        this.commentForm.patchValue(this.nameTag);
      });
  }

  onSubmit() {
    if (!this.commentForm.valid) {
      return;
    }
    console.log('### this. name tag', this.nameTag);
    const regex = new RegExp(this.nameTag as string, "g");
    const comment: Comment = {
      content: this.commentForm.value.replace(regex, '').trim(),
    };
    const postId = this.post._id as string;

    if (this.commentId && this.nameTag) {
      console.log(comment);
    }
    this.postService.updateComment(comment, postId).subscribe({
      next: () => {
        console.log('Comment upldated');
      },
      error: (err) => {
        console.log('Err', err);
      },
    });
  }

  ngOnDestroy() {
    if (this.replySubscription$) {
      this.replySubscription$.unsubscribe();
    }
  }
}
