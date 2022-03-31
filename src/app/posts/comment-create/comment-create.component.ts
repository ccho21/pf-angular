import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Post } from '../model/post';
import { Comment } from '../model/comment';
import { commentUpdated } from '../post.actions';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';

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
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.commentForm = new FormControl('');
  }

  onSubmit() {
    if (!this.commentForm.valid) {
      return;
    }
    console.log('hello comment submit');

    const comment: Comment = { content: this.commentForm.value };
    const post: Partial<Post> = {
      comments: [comment],
    };
    const update: Update<Post> = {
      id: this.post._id as string,
      changes: comment,
    };
    console.log('### update', update);
    this.store.dispatch(commentUpdated({ update }));
  }
}
