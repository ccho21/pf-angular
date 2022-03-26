import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/reducers';
import { PostService } from '@services/post.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { selectAllPosts } from '../posts.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts$?: Observable<Post[]>;
  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    console.log('############ POST LIST #############');
    this.reload();
  }
  reload() {
    console.log('RELOAD APP');
    this.posts$ = this.store.pipe(select(selectAllPosts));
  }
}
