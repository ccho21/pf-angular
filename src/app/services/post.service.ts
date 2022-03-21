import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of } from 'rxjs';
import { Post } from '@posts/model/post';
import { concatMap, map, tap } from 'rxjs/operators';
import { convertSnaps } from './db-utils';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private afs: AngularFirestore) {}
  loadPosts(): Observable<Post[]> {
    console.log("[POST service]:  get collection");
    return this.afs
      .collection('posts')
      .get()
      .pipe(map((result) => convertSnaps<Post>(result)));
  }
}
