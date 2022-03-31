import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '@app/reducers';
import { PostService } from '@app/services/post.service';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { postUpdated } from '../post.actions';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss'],
})
export class PostNewComponent implements OnInit {
  form!: FormGroup;
  post!: Post;

  loading$!: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      content: ['', [Validators.required]],
      images: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Post add function', this.form);
    if (!this.form.valid) {
      return;
    }
    const post = { ...this.form.value };

    const update: Update<Post> = {
      id: post._id,
      changes: post,
    };
    console.log('### update', update);
    this.store.dispatch(postUpdated({ update }));
    // this.postService.addPost();
  }

  addImages(urls: Array<string>) {
    console.log('### urls :', urls);
    this.form.get('images')?.setValue(urls);
    console.log('first', this.form.get('images'));
  }
}
