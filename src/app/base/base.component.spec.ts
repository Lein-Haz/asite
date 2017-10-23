import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";

import { BaseComponent } from './base.component';
import {NavComponent} from "../shared/nav/nav.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {MediaShadeComponent} from "../shared/media-shade/media-shade.component";
import {MediaCarouselComponent} from "../shared/media-shade/media-carousel.component";
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {NavListComponent} from "../shared/nav-list/nav-list.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {GoogleSigninModule} from "../shared/google-signin/google-signin.module";
import {AuthService} from "../../core/services/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {WindowRef} from "../../core/services/window.ref";
import {MATERIAL_COMPATIBILITY_MODE, MdSidenav} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ConstantService} from "../../core/services/constant.service";
import {By} from "@angular/platform-browser";

//declare const gapi: any;

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;

  let FLEX_LAYOUT = ConstantService.FLEX_LAYOUT;

  let isSignedIn: boolean;
  let windowRef: WindowRef;



  beforeEach(async(() => {
    let authServiceStub = {
      auth2: {}
    };
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        AppMaterialModule,
        FlexLayoutModule,
        GoogleSigninModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [
        BaseComponent,
        NavComponent,
        FooterComponent,
        MediaShadeComponent,
        MediaCarouselComponent,
        NavListComponent
      ],
      providers:[
        {provide: AuthService, useValue: authServiceStub},
        WindowRef,
        { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    //windowRef = new WindowRef();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize members', ()=>{
    console.log(component);
    let aNumber = 1;
    expect(component.displayText).toEqual('How can I help you?');
    expect(typeof component.navHeight).toBe(typeof aNumber);
  });

  it('should have a side-nav component', () => {
    fixture.detectChanges();//It does something weird without this line
    let sideNav = fixture.debugElement.query(By.directive(MdSidenav));
    expect(sideNav).not.toBe(null);
  });

  it('should be doing something', ()=>{
    expect(true).toBeTruthy();
  });
});
