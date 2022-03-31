import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Post } from '@posts/model/post';
import { concatMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router
  ) {}
  loadPosts(): Observable<Post[]> {
    return this.http.get('/api/posts').pipe(
      map((res) => {
        console.log(res);
        return res as Post[];
      })
    );
  }

  findPostById(postId: string | null): Observable<Post> {
    return this.http.get(`http://localhost:5000/api/posts/${postId}`).pipe(
      map((res) => {
        return res as Post;
      })
    );
  }

  savePost(postId: string, changes: Partial<Post>): Observable<Post> {
    console.log('POST Id ', postId, '### CHANGES ', changes);
    return this.http
      .post<Post>('http://localhost:5000/api/posts', changes)
      .pipe(
        tap((res: Post) => {
          console.log('### POST OUTCOME', res);
          this.router.navigateByUrl('/posts');
        })
      );
  }
}
