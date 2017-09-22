import { UserModel } from './../userModel';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Rx";

//importing RxJs required methods

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  private BASE_URL = 'http://localhost:8000/api/users'

  constructor(
    private http: Http
  ) { }

  /**
   * getAllUser
   */
  public getAllUser() {
    return this.http.get(`${this.BASE_URL}`)
    .map((res:Response) => res.json)
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  /**
   * addUser
body:UserModel   */
  public addUser(body:UserModel) {
    let options = new RequestOptions({
      headers: new Headers({'Content-Type':'application/json;charset=UTF-8'})
    });

    return this.http.post(`${this.BASE_URL}`, JSON.stringify(body), options)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
  }

  /**
   * updateUser
body:UserModel   */
  public updateUser(body:UserModel) {
    let options = new RequestOptions({
      headers: new Headers({'Content-Type':'application/json;charset=UTF-8'})
    });

    return this.http.put(`${this.BASE_URL}${body['id']}`, JSON.stringify(body), options)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
    
  }

  /**
   * deleteUsers
usersID:string    */
  public deleteUser(usersID:string) {

    let options = new RequestOptions({
      headers: new Headers({'Content-Type':'applicatiion/json;charset=UTF-8'})
    });

    return this.http.delete(`${this.BASE_URL}${usersID}`, options)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
    
  }

}
