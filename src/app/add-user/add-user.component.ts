import { UserModel } from './../userModel';
import { EmitterService } from './../services/emitter.service';
import { HttpService } from './../services/http.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [HttpService]
})
export class AddUserComponent implements OnChanges {

  @Input() userInfo: string;
  @Input() reset: string;
  @Input() userList: string;

  private userModel: UserModel = new UserModel('', '', '');

  constructor(
    private httpService: HttpService
  ) {}

  public addUser() {
    this.httpService.addUser(this.userModel).subscribe(
      response => {
        if(response.error){
          alert('The user could not be added, Server Error');
        } else {
          EmitterService.get(this.userList).emit(response.users);
        }
      },
      error => {
        alert('The user caould not be added, Server error')
      }
    )
  }

  public resetAddUser(){
    this.userModel = new UserModel('','','')
  }

  ngOnChanges() {
  }

}
