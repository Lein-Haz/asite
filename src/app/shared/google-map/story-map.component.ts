import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Output} from '@angular/core';
import {MyLatLng} from "./mapModels/myLatLng";
import {MyMap} from "./mapModels/myMap";
import {MyMarker} from "./mapModels/myMarker";
import {ConstantService} from "../../../core/services/constant.service";

import {StoryService} from "../../../core/services/story.service";
import {StoryStepModel} from "../../../core/models/StoryStep.model";
import {StoryModel} from "../../../core/models/Story.model";
import {Observable } from "rxjs";
import {isUndefined} from "util";

@Component({
  selector: 'story-map',
  templateUrl: './story-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class StoryMapComponent implements OnInit, AfterViewInit {
  @ViewChild('gmap') myMap: ElementRef;

  private storyMap: MyMap;
  private markerList: MyMarker[];
  private overLayText: string;

  @Output()
  doSomething(){
    console.log(this.storyMap);
    StoryService.lockMap(this.storyMap);
    this.doStory(this.storyMap);
  }

  public doStory(map: MyMap){
    const STORIES = ConstantService.STORIES;
    let storyArray = this.storyService.buildStoryFromConstant(STORIES);

    let bigObs: Observable<any>;
    storyArray.forEach((story: StoryModel)=>{
      let newObservable = this.sceneHandler(story, map);
      if(isUndefined(bigObs)){
        bigObs = newObservable;
      }else{
        bigObs = bigObs.concat(newObservable);
      }
    });

    bigObs.subscribe(
      (val)=>{
        console.log("The Next?");
        console.log(val);
      },
      (err)=>{
        console.log(err);
      },
      ()=>{
        StoryService.unlockMap(this.storyMap);
        console.log("completed");
      }
    );
  }

  sceneHandler(story: StoryModel, map: MyMap): Observable<any>{
    return Observable.create((sceneObserver)=>{
      let steps = this.storyService.intervalSet((story.steps.length));
      steps.subscribe(
        (val)=>{
          this.processScene(story.steps[val], map, story);
        },
        (err)=>{
          console.log(err);
        },
        ()=>{
          setTimeout(()=>{
            this.storyService.closeStory(story);
          }, 1750);
          sceneObserver.complete();
        }
      );
    });
  }

  processScene(storyStep: StoryStepModel, map: MyMap, story: StoryModel){
    this.overLayText = storyStep.text;
    map.setZoom(storyStep.zoom);
    this.storyService.handleAction(storyStep, map, story);
  }

  @Output()
  getBnds(){
    let bnds = this.storyMap.getBounds();
    console.log("Northeast is " + bnds.getNorthEast().toString());
    console.log("Southwest is " + bnds.getSouthWest().toString());
    console.log("Center is " + bnds.getCenter().toString());
    console.log("Zoom is " + this.storyMap.getZoom());

  }

  mapInitHandler($event){
    this.storyMap = $event;
    this.storyMap.setOptions({
      center: {lat: 48.395315, lng: 9.990424},
      zoom: 14,
      disableDefaultUI: true,
    });
  }

  initSomeMarkers(){
    const COORDINATES = ConstantService.COORDINATES;
    for (let key in COORDINATES){
      let tempLL = new MyLatLng(COORDINATES[key].LAT, COORDINATES[key].LNG);
      this.markerList.push(this.storyService.addMarker(tempLL, this.storyMap, key));
    }
    console.log(this.markerList);
  }

  ngAfterViewInit(): void {
    this.mapInit();
  }

  mapInit(){
    let opts = {
      center: {lat: 48.395315, lng: 9.990424},
      zoom: 14
    };
  }

  constructor(private storyService: StoryService) {
    this.markerList = [];
  }

  ngOnInit() {
    this.overLayText = "Just initing the overlay text";
  }

}
