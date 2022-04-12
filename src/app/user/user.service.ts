import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/auth/model/user';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router
  ) {}

  getUserById(postId: string | null): Observable<User> {
    return this.http.get(`http://localhost:5000/api/posts/${postId}`).pipe(
      map((user) => {
        console.log(user);
        return user as User;
      })
    );
  }
}
