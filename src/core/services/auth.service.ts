import {Injectable} from "@angular/core";
import { Http, Headers, Response, Request, RequestOptions } from  "@angular/http"
import { Observable, Subject } from "rxjs/Rx";
import {ApiService} from "./api.service";

@Injectable()
export class AuthService{

  private auth2: any;

  constructor( private http: Http, private apiService: ApiService){ }

  private login(){
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const method = 'GET';
    let request = this.apiService.apiCall(oauth2Endpoint, method, this.getAuthParams(), null, this.apiService.getHeaders());
    let observable = Observable.create(function subscribe(observer) {
      request.subscribe(data => {
        console.log("we have data");
        console.log(data);
      });
    });
  }

  public logout(){
    this.auth2.signOut().then(()=>{
      console.log("Bye Felicia");
    });
  }

  public setAuth(auth2){
    this.auth2 = auth2;
  }

  public getAuth(){
    return this.auth2;
  }

  public getCurrentUser(){
    return this.auth2.currentUser.get();
  }

  private getAuthParams(){
    const SCOPE = 'https://www.googleapis.com/auth/gmail.readonly';
    const redirLocal = 'http://localhost:4200/oauthreturn';
    const redirReal = 'https://lein-haz.github.io/asite/oauthreturn';
    let params = {
      'client_id': '299857897388-pufir3e70d4aujkep346tiuk5m5tp7sc.apps.googleusercontent.com',
      'redirect_uri': redirLocal,
      'response_type': 'token',
      'state': 'pass-through value',
      'include_granted_scopes': 'true',
      'scope': SCOPE
    };
    return params;

  }

}
