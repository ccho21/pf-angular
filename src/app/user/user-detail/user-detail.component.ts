import { Component, OnInit } from '@angular/core';
import { getCurrentUser } from '@app/auth/auth.selectors';
import { User } from '@app/auth/model/user';
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
  }
}
