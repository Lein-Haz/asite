import {Component, AfterViewInit} from '@angular/core';
import {ConstantService} from "../core/services/constant.service";
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  public FLEX_LAYOUT = ConstantService.FLEX_LAYOUT;

  public isSignedIn: boolean;

  ngAfterViewInit() {

  }

  updateStatus($event){
    this.isSignedIn = $event;
  }

  authInitializedHandler($event){
    let authInstance = this.authService.getAuth();
    this.isSignedIn = authInstance.isSignedIn.get();
  }

  logout(){
    this.authService.logout();
  }

  title = 'app';

  constructor(private authService: AuthService){
    console.log(this.FLEX_LAYOUT);
  }
}
