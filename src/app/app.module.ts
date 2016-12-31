import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserService } from './common-services/user.service';
import { HttpOptionsService } from './common-services/http-options.service';
import { ForumModule, CreatePostComponent } from './forum';

import { AuthGuard } from './guard/guard';
import { PublicProfileComponent } from './users/public-profile/public-profile/public-profile.component';
import { ProfileNavComponent } from './profile/profile-nav/profile-nav.component';
import { ProfileHomeComponent } from './profile/profile-home/profile-home.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileInboxComponent } from './profile/profile-inbox/profile-inbox.component';
import { ProfileOutboxComponent } from './profile/profile-outbox/profile-outbox.component';
import { CategoryService } from './services/category.service';
// import { ListCategoriesComponent } from './list-categories/list-categories.component';
// import { PaginationComponent } from './pagination/pagination.component';
// import { ListPostsComponent } from './list-posts/list-posts.component';
// import { ListPostsComponent } from './forum/list-posts/list-posts.component';
// import { SinglePostComponent } from './forum/single-post/single-post.component';
// import { SinglePostCommentComponent } from './forum/single-post/single-post-comment/single-post-comment.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PublicProfileComponent,
    ProfileNavComponent,
    ProfileHomeComponent,
    ProfileEditComponent,
    ProfileInboxComponent,
    ProfileOutboxComponent
    
    // ListCategoriesComponent,
    // PaginationComponent
    // ListPostsComponent,
    // PostRowComponent,
    // SinglePostComponent,
    // SinglePostCommentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AuthModule,
    ForumModule,
    FormsModule,
    SimpleNotificationsModule
  ],
  providers: [AuthService, UserService, HttpOptionsService, AuthGuard, CategoryService]
})
export class AppModule { }
