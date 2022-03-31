import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Post } from '@posts/model/post';
import { Comment } from '@posts/model/comment';
import { concatMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { postUpdated } from '@app/posts/post.actions';
import { Update } from '@ngrx/entity';

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
    const id = postId ? postId : '';
    return this.http
      .put<Post>('http://localhost:5000/api/posts/' + id, changes)
      .pipe(
        tap((res: Post) => {
          console.log('### POST OUTCOME', res);
          this.router.navigateByUrl('/posts');
        })
      );
  }

  updateComment(postId: string, changes: Partial<Post>): Observable<Post> {
    console.log("changes### : ", changes);
    // console.log('POST Id ', postId, '### CHANGES ', comment);
    return this.http
      .put<Comment[]>('http://localhost:5000/api/posts/comment/' + postId, changes)
      .pipe(
        tap((res: any) => {
          console.log('### COMMENT OUTCOME', res);
          const post = {
            comments: res,
          };
          const update: Update<Post> = {
            id: postId,
            changes: post,
          };
          // this.store.dispatch(postUpdated({update}));
        })
      );
  }
}
