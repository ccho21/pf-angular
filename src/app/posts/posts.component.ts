import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
// import { PostService } from '@services/post/post.service';
// import { LoggerService } from '@app/core/services/logger/logger.service';
// import { Post } from '../../../shared/models/post';
// import { LikeService } from '@app/core/services/like/like.service';
// import { concatMap, toArray } from 'rxjs/operators';
import { of, Subscription, from, forkJoin, Observable } from 'rxjs';
// import { CommentService } from '../../../core/services/comment/comment.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { PostStateService } from '../post-state.service';

import { PostService } from '@app/posts/services/post.service';
import { Post } from '@app/shared/models/post.model';
// import { LikeService } from '@app/core/services/like/like.service';
// import { concatMap, toArray } from 'rxjs/operators';
// import { of, Subscription, from, forkJoin, Observable } from 'rxjs';
// import { CommentService } from '../../../core/services/comment/comment.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { PostStateService } from '../post-state.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() posts: ReadonlyArray<Post> = [];
  // @Input() isWriteable?: boolean;
  // @Input() postLimit: number | undefined;
  // @Input() bookmarkValid: boolean | undefined;
  // @Input() commentedValid: boolean | undefined;
  // @Input() noMessage?: string;
  // @Output() messageEmit: EventEmitter<any> = new EventEmitter<any>(); // Emit form value

  constructor() {
  }

  ngOnInit() {
    // console.log('############ POST LIST #############');
    // this.postStateService.postSearchEmitted().subscribe(keyword => {
    //   this.filterPosts(keyword);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.postObservable && this.postObservable) {
    //   this.logger.info('### NG ON CHANGE ###', changes, this.postObservable);
    //   this.getPosts(this.postObservable);
    // }
  }

  onScroll() {
    // const lastPost = this.filteredPosts[this.filteredPosts.length -1];
    // const observable = this.postService.getPostsPaignated(lastPost, this.postLimit);
    // if (this.bookmarkValid) {
    // } else if (this.commentedValid) {
    // } else {
    //   this.getPosts(observable);
    // }
  }

  getPosts() {
    // if (postObservable) {
    //   this.showSpinner = true;
    //   this.postSubscription = postObservable.pipe(
    //     concatMap((results: any) => {
    //       return results ? from(results.docs) : of(null);
    //     }),
    //     concatMap((res: any) => {
    //       if (res) {
    //         const post = res.data();
    //         return forkJoin([
    //           of(post),
    //           this.likeService.getLikes(post.postId, 1),
    //           this.commentService.getComments(post.postId)
    //         ]);
    //       } else {
    //         return of(null);
    //       }
    //     }),
    //     concatMap((results: any) => {
    //       if (results) {
    //         const post = results[0];
    //         post.likes = results[1].docs.map(cur => cur.data());
    //         post.comments = results[2].docs.map((cur: any) => cur.data());
    //         return of(post);
    //       } else { return of(null); }
    //     }),
    //     toArray(),
    //   ).subscribe(results => {
    //     this.logger.info('##### results', results);
    //     if (results && results[0]) {
    //       const postsData = results as Post[];
    //       this.posts = [...this.posts, ...postsData];
    //       this.filteredPosts = this.posts.map(cur => ({ ...cur }));
    //       this.postStateService.setPosts(this.filteredPosts);
    //     } else {
    //       this.noMorePosts(results);
    //       this.message = this.noMessage;
    //       this.logger.info('### MESSAGE ########', this.message);
    //       this.messageEmit.emit(this.message);
    //     }
    //     this.showSpinner = false;
    //   });
  }

  filterPosts(keyword: any) {
    // if (keyword) {
    //   this.filteredPosts = this.posts.filter(post => post.content.toLowerCase().includes(keyword.toLowerCase()));
    // } else {
    //   this.filteredPosts = this.posts.map(cur => ({ ...cur }));
    // }
  }

  noMorePosts(data: any): void {
    // this.postsEnd = data.length === 0? true : false;
  }

  deletePost(post: any) {
    // const postId = post.postId;
    // this.postService.deletePost(postId);
  }

  editPost(post: any) {
    // this.logger.info(post);
    // this.router.navigateByUrl(`p/${post.postId}/edit`);
  }

  getBackgroundImageUrl(post: any) {
    // return `url(${post.photoURLs[0] ? post.photoURLs[0] : this.default})`;
  }

  clickPost(post: any, index: any) {
    // this.postStateService.setPostIndex(index);
    // const base = `${this.router.url}/p/${post.postId}`;
    // this.logger.info(this.router);
    // this.router.navigateByUrl(base);
  }
}
