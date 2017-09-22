import { Component } from '@angular/core';

import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

import { EmitterService } from './services/emitter.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public host_id: "HOST_COMPONENT";
  public title: 'Angular 2, Nodejs & MongoDB CRUD';

  private userInfo = 'CRUD_USER_INFO';
  private reset = 'CRUD_RESET_FORM';
  private userList = 'CRUD_USER_LIST'

  constructor(private _emitterService: EmitterService) {}
}
