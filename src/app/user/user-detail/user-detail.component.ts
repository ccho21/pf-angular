import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from '@app/auth/model/user';
import { Post } from '@app/posts/model/post';
import { selectPostsByUserId } from '@app/posts/posts.selectors';
import { AppState } from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from '../user.selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$?: Observable<User>;
  userPosts$?: Observable<Post[]>;
  userId?: string;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('[USER DETAIL COMPONENT]');

    this.reload();
  }
  reload() {
    this.userId = this.route.snapshot.paramMap.get('id') as string;

    this.user$ = this.store.pipe(select(selectUser)) as Observable<User>;
    this.user$.subscribe((val: any) => console.log(val));
    this.userPosts$ = this.store.pipe(select(selectPostsByUserId(this.userId)));
  }
}
