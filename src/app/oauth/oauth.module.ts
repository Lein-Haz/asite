import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OauthRoutingModule } from './oauth-routing.module';
import { OauthComponent } from './oauth.component';
import { AppMaterialModule } from "../app-material/app-material.module";
import { FormsModule } from "@angular/forms";
import {GoogleSigninModule} from "../shared/google-signin/google-signin.module";

@NgModule({
  imports: [
    CommonModule,
    OauthRoutingModule,
    AppMaterialModule,
    FormsModule,
    GoogleSigninModule
  ],
  exports: [
    OauthComponent
  ],
  declarations: [OauthComponent]
})
export class OauthModule { }
