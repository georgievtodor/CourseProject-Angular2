import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { NotificationsService } from './../../../../node_modules/angular2-notifications';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  public postsInfo: any;
  private page: number;
  private sub: any;
  constructor(private _service: ForumService,
     private _notificationService: NotificationsService,
     private _route: ActivatedRoute) { 
    this.postsInfo = {};
  }

  ngOnInit() {
  this.sub = this._route.params.subscribe(params => {
       this.page = params['page'];
    });

    this._service
      .getAllPosts(this.page)
      .subscribe(response => {
                if (response.message === 'error') {
                    this._notificationService.error('Error', `${response.message.text}`);
                } else {

                    let forumPostsMapped = response.forumPosts;

                    forumPostsMapped = forumPostsMapped.map(x => {
                      x.answerCount = x.answers.length;
                      return x;
                    })

                    this.postsInfo.posts = forumPostsMapped;
                    this.postsInfo.pageCount = response.pageCount;
                }
            },
            err => console.log(err));
  }
}
