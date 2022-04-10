import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { selectAllPosts } from '../posts.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  posts$?: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    console.log('############ POST LIST #############');
    this.reload();
  }
  reload() {
    console.log('RELOAD APP');
    this.posts$ = this.store.pipe(select(selectAllPosts));
  }
}
