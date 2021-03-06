import { Routes } from '@angular/router';

import { RegisterComponent, LoginComponent } from './auth';
import { ListCategoriesComponent } from './category/list-categories/list-categories.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CreatePostComponent, SinglePostComponent, ListPostsComponent, SearchComponent } from './forum';
import { AuthGuard } from './guard/auth.guard';
import { PublicProfileComponent } from './users/public-profile/public-profile/public-profile.component';
import { ProfileNavComponent } from './profile/profile-nav/profile-nav.component';
import { ProfileHomeComponent } from './profile/profile-home/profile-home.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileInboxComponent } from './profile/profile-inbox/profile-inbox.component';
import { ProfileOutboxComponent } from './profile/profile-outbox/profile-outbox.component';
import { AllPostsByUserComponent } from './users/all-posts-by-user/all-posts-by-user.component';
import { HomeComponent } from './forum/home/home.component';


export const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forum/create', component: CreatePostComponent },
    { path: 'forum/post/:id', component: SinglePostComponent },
    { path: 'forum/:page', component: ListPostsComponent },
    {
        path: 'profile', component: ProfileNavComponent, canActivate: [AuthGuard], children: [
            {
                path: 'home',
                component: ProfileHomeComponent
            },
            {
                path: 'edit',
                component: ProfileEditComponent
            },
            {
                path: 'inbox',
                component: ProfileInboxComponent
            },
            {
                path: 'outbox',
                component: ProfileOutboxComponent
            }
        ]
    },
    { path: 'category', component: ListCategoriesComponent },
    { path: 'category/create', component: CreateCategoryComponent },
    { path: 'users/:username/posts', component: AllPostsByUserComponent },
    { path: 'users/:username', component: PublicProfileComponent },
    { path: 'search', component: SearchComponent },
    { path: 'home', component: HomeComponent },
    // TODO: error page. wrong urls go to homepage 
    { path: '**', redirectTo: '/home' }
]