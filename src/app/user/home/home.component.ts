import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getCurrentUser } from '@app/auth/auth.selectors';
import { User } from '@app/auth/model/user';
import { AppState } from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userId?: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log('home component');
    this.userId = this.route.snapshot.paramMap.get('id') as string;
    if (!this.userId) {
      this.router.navigateByUrl('/posts');
    }
  }
}
