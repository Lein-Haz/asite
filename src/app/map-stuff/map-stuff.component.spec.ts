import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStuffComponent } from './map-stuff.component';

describe('MapStuffComponent', () => {
  let component: MapStuffComponent;
  let fixture: ComponentFixture<MapStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
