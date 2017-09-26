import {Component, OnInit, Output, ChangeDetectorRef} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {

  @Output()
  doMeThing(){
    console.log("Clicky");

    let newThang = this.authService.getAuth();
    console.log("Signed in is " + newThang.isSignedIn.get());

  }

  @Output()
  getOut(){
    //let authInstance = gapi.auth2.getAuthInstance();
    let authInstance = this.authService.getAuth();
    authInstance.signOut().then(()=>{
      console.log("Bye Felicia");
    });
  }

  @Output()
  updateStatus(val){
    console.log("Thats a yoshi");
    console.log("New label is " + val);
    //this.ref.detectChanges();
  }

  constructor(private authService: AuthService, private router: Router, private ref: ChangeDetectorRef) { }

  ngOnInit() {

  }

}
