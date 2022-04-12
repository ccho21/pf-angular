import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { getCurrentUser } from '@app/auth/auth.selectors';
import { User } from '@app/auth/model/user';
import { Post } from '@app/posts/model/post';
import { selectAllPosts, selectPostsByUserId } from '@app/posts/posts.selectors';
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
  userPosts$?: Observable<any>;
  userId?: string;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reload();
  }
  reload() {
    console.log('RELOAD APP');
    this.userId = this.route.snapshot.paramMap.get('id') as string;

    this.user$ = this.store.pipe(select(getCurrentUser)) as Observable<User>;
    this.userPosts$ = this.store.pipe(select(selectPostsByUserId(this.userId)));
  }
}
