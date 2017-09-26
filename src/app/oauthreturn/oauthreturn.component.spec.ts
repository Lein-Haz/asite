import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthreturnComponent } from './oauthreturn.component';

describe('OauthreturnComponent', () => {
  let component: OauthreturnComponent;
  let fixture: ComponentFixture<OauthreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
