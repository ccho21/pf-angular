import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { comparePosts, Post } from './model/post';

// import { compareLessons, Lesson } from './model/lesson';
import { PostsResolver } from './posts.resolver';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './posts.effects';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './reducers/post.reducers';
import { HomeComponent } from './home/home.component';
export const postsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // resolve: {
    //   posts: PostsResolver,
    // },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsRoutes),
    // EffectsModule.forFeature([PostsEffects]),
    StoreModule.forFeature('posts', postsReducer),
  ],
  declarations: [HomeComponent],
  exports: [],
  entryComponents: [],
  providers: [PostsResolver],
})
export class PostsModule {
  constructor() {}
}
