import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PostService } from '@app/posts/services/post.service';

import { Post } from '@app/shared/models/post.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  posts$: Observable<any> | undefined;

  constructor(private postService: PostService, private store: Store) {
    // this.posts$ = store.select('posts');
  }

  ngOnInit(): void {  
    // this.postService.getPosts();
  }
}
