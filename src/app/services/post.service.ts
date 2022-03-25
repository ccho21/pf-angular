import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Post } from '@posts/model/post';
import { concatMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private store: Store, private http: HttpClient) {}
  loadPosts(): Observable<Post[]> {
    return this.http.get('/api/posts').pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }
}
