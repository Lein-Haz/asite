import {Injectable} from "@angular/core";
import { Http, Headers, Response, Request, RequestOptions } from  "@angular/http"
import { Observable, Subject } from "rxjs/Rx";


@Injectable()
export class ApiService{

  constructor( private http: Http){ }

  aliveTest(){
    console.log("I'm alive");

  }

  public getHeaders(): Headers{
    let headers = new Headers();

    headers.set('Content-Type', 'application/json');

    return headers;
  }

  public apiCall(url:string, method:string, params:any, data:any, headers:Headers, resource?:string) : Observable<any> {
    if(resource) {
      url = url + resource;
    }
    if(!data) {
      data = {};
    }

    let that = this;
    let reqOptions:RequestOptions = new RequestOptions({headers:headers, method:method, body:data, search:params});

    //console.log(reqOptions);
    let observable = Observable.create(function subscribe(observer) {
      let httpRequest = that.http.request(url, reqOptions);
      httpRequest.subscribe(
        data => {
          let body = {};
          try {
            body = data.json();
          }
          catch(e) {
            console.log(e);
          }

          observer.next(body);
          observer.complete();
        },
        error => {
          that.handleApiError(error);
          observer.error(error);
        });
    }).share();

    return observable;
  }

  public handleApiError(apiError) {
    console.log("Shiii");
    console.log(apiError);
    console.log("handled");
  }


}
