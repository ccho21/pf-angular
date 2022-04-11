import { Component, OnInit } from '@angular/core';
import { getCurrentUser } from '@app/auth/auth.selectors';
import { User } from '@app/auth/model/user';
import { Post } from '@app/posts/model/post';
import { selectAllPosts } from '@app/posts/posts.selectors';
import { AppState } from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$?: Observable<User>;
  posts$?: Observable<Post[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log('hello ');
    this.reload();
  }
  reload() {
    console.log('RELOAD APP');
    this.user$ = this.store.pipe(select(getCurrentUser)) as Observable<User>;
    this.user$.subscribe((val) => {
      console.log(val);
    });

    this.posts$ = this.store.pipe(select(selectAllPosts));
    this.posts$.subscribe((val) => console.log('### POSTS VAL', val));
  }
}
