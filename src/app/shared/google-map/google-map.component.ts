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
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  @ViewChild('mymap') myMap: ElementRef;

  private theMap: MyMap;
  private markerList: MyMarker[];
  private overLayText: string;

  @Output()
  doSomething(){
    this.doStory();
  }

  public doStory(){
    const STORIES = ConstantService.STORIES;
    let storyArray = this.storyService.buildStoryFromConstant(STORIES);

    let bigObs: Observable<any>;
    storyArray.forEach((story: StoryModel)=>{
      let newObservable = this.sceneHandler(story.steps);
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
        console.log("completed");
      }
    );
  }

  public sceneHandler(storySteps: StoryStepModel[]): Observable<any>{
    return Observable.create((sceneObserver)=>{
      let steps = this.storyService.intervalSet((storySteps.length));
      steps.subscribe(
        (val)=>{
          this.processScene(storySteps[val]);
        },
        (err)=>{
          console.log(err);
        },
        ()=>{
          sceneObserver.complete();
          console.log("interval steps completed");
        }
      );
    });
  }

  @Output()
  getBnds(){
    let bnds = this.theMap.getBounds();
    console.log("Northeast is " + bnds.getNorthEast().toString());
    console.log("Southwest is " + bnds.getSouthWest().toString());
    console.log("Center is " + bnds.getCenter().toString());
    console.log("Zoom is " + this.theMap.getZoom());

  }

  initSomeMarkers(){
    const COORDINATES = ConstantService.COORDINATES;
    for (let key in COORDINATES){
      let tempLL = new MyLatLng(COORDINATES[key].LAT, COORDINATES[key].LNG);
      this.markerList.push(this.storyService.addMarker(tempLL, this.theMap, key));
    }
    console.log(this.markerList);
  }

  ngAfterViewInit(): void {
    this.mapInit();
  }

  processScene(storyStep: StoryStepModel){
    this.overLayText = storyStep.text;
    this.theMap.setZoom(storyStep.zoom);
    this.storyService.handleAction(storyStep, this.theMap);
  }

  mapInit(){
    let opts = {
      center: {lat: 48.395315, lng: 9.990424},
      zoom: 14
    };


    this.theMap = new MyMap(this.myMap.nativeElement, opts);
    //this.addMapClickListener();
    //this.initSomeMarkers();
  }

  /*addMapClickListener(): void{
    this.theMap.addListener('click', ($event) => {
      let clickedLatLng: MyLatLng = new MyLatLng($event.latLng.lat(), $event.latLng.lng());

    });
  }*/



  constructor(private storyService: StoryService) {
    this.markerList = [];
  }

  ngOnInit() {
    this.overLayText = "Just initing the overlay text";
  }

}
