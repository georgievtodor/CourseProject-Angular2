import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../../../common-services/user.service';
import { User } from './../../model/user-model';
import { Message } from './../../model/message-model';
import { NotificationsService } from './../../../../../node_modules/angular2-notifications';



@Component({
  selector: 'app-public-profile',
  template: '<simple-notifications [options]="options"</simple-notifications>',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  private _route: ActivatedRoute;
  private _params: any;
  private _notificationService: NotificationsService;
  private _username: string;
  private _router: Router;
  public _userService: UserService;
  public username: string;
  public firstname: string;
  public lastname: string;
  // for test purposes to replace with real bool when created
  public isUserLoggedIn: boolean;
  public message: Message;
  public displayHeader: Boolean;

  public options = {
    position: ['bottom', 'right'],
    timeOut: 5000,
    lastOnBottom: true
  }

  constructor(route: ActivatedRoute, userService: UserService, notificationService: NotificationsService, router: Router) {
    this._route = route;
    this._params = route.params;
    this._userService = userService;
    this.message = new Message();
    this._notificationService = notificationService;
    this._username = this._params._value.username;
    this.displayHeader = true;
    this._router = router;
  }

  private getUser() {
    let username = this._params._value.username;

    this._userService.getUserData(username)
      .subscribe(
      user => {
        if (user) {
          this.username = user.username;
          this.firstname = user.firstName;
          this.lastname = user.lastName;
        }
        else {
          // ne raboti :)
          this._notificationService.error("test", "test");
          this._router.navigateByUrl('/');
        }
        // TODO: find a way to work directly with observable ?????

      },
      // TODO: redirect to users not found html page
      error => console.log('not found'));
  }

  private sendMessage() {
    console.log('vikna me formata');
    console.log(this.message);
    this._userService.sendMessageToUser(this._params._value.username, 'pesho', this.message)
      .subscribe(response => {
        console.log(response);
        this._notificationService.success('Success.', 'Message sent.',
          {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          });
        this.displayHeader = !this.displayHeader;
        console.log(response.id);
      },
      err => console.log(err));
  }
  ngOnInit() {
    this.getUser();
    this.isUserLoggedIn = true;
  }
}
