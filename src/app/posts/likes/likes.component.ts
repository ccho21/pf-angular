import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from '@app/reducers';
import { PostService } from '@app/services/post.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from '../model/post';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {
  @Input() postId?: string;
  @Input() userId?: string;
  @Input() commentId?: string;
  @Input() isLiked?: boolean;
  @Output() commentEmit: EventEmitter<any> = new EventEmitter();

  likeSub$?: Subscription;
  constructor(
    private store: Store<AppState>,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    console.log(this.userId);
  }

  clickLike() {
    console.log('Post Id', this.postId);
    console.log('COMMENT?', this.commentId);
    this.postService
      .clickLike(this.postId as string, this.commentId)
      .subscribe({
        next: () => {
          console.log('success');
        },
        error: (err) => {
          console.log(err.error);
        },
      });
  }
  removeLike() {
    this.postService
      .removeLike(this.postId as string, this.commentId)
      .subscribe({
        next: () => {
          console.log('success');
        },
        error: (err) => {
          console.log(err.error);
        },
      });
  }
}
