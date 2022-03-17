import { Injectable } from '@angular/core';
import { Post } from '@app/shared/models/post.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private afs: AngularFirestore) {}
  getPosts() {
    return this.afs
      .collection('posts', (ref) => ref.orderBy('createdAt', 'desc'))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((res) => res.payload.doc.data());
        })
      );
  }
}
