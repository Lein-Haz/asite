import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Output} from '@angular/core';
import {MyMap} from "./mapModels/myMap";
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
  public overLayText: string;
  private storyArray: StoryModel[];

  @Output()
  doSomething(){
    StoryService.lockMap(this.storyMap);
    this.doStory(this.storyMap);
  }

  steppedZoom(map: MyMap, destinationZoomLevel: number){
    if(map.getZoom() == destinationZoomLevel){
      console.log("You good");
    }else{
      let zoomObservable = this.storyService.steppedZoom(map, destinationZoomLevel);

      zoomObservable.subscribe(
        (val)=>{
          console.log("The root next");
          map.setZoom(val);
        },
        (err)=>{
          console.log(err);
        },
        ()=>{
          StoryService.unlockMap(this.storyMap);
          console.log("the root completed");
        }
      );
    }
  }

  public doStory(map: MyMap){
    const STORIES = ConstantService.STORIES;
    this.storyArray = this.storyService.buildStoryFromConstant(STORIES);

    let wholeStoryObservable: Observable<any>;
    this.storyArray.forEach((story: StoryModel)=>{
      let newObservable = this.storyHandler(story, map);
      if(isUndefined(wholeStoryObservable)){
        wholeStoryObservable = newObservable;
      }else{
        wholeStoryObservable = wholeStoryObservable.concat(newObservable);
      }
    });

    wholeStoryObservable.subscribe(
      (val)=>{
        console.log("The root next");
        console.log("One story done");
        console.log(val);
      },
      (err)=>{
        console.log(err);
      },
      ()=>{
        StoryService.unlockMap(this.storyMap);
        console.log("the root completed");
      }
    );
  }

  storyHandler(story: StoryModel, map: MyMap): Observable<any>{
    return Observable.create((sceneObserver)=>{
      let stepObservable;
      story.steps.forEach((storyStep: StoryStepModel, index:number)=>{
        if(isUndefined(stepObservable)){
          stepObservable = this.storyService.setStepDelay(storyStep.delay, index);
        }else{
          stepObservable = stepObservable.concat(this.storyService.setStepDelay(storyStep.delay, index));
        }
      });
      stepObservable.subscribe(
        (stepIndex)=> {
          console.log("steps say val is " + stepIndex);
          this.processStep(story.steps[stepIndex], map, story);
        },
        (err)=> {
          console.log("Error happened with story steps");
          console.log(err);
        },
        ()=> {
          setTimeout(()=>{
            this.storyService.closeStory(story);
          }, 1750);
          sceneObserver.complete();
        }
      );
    });
  }

  processStep(storyStep: StoryStepModel, map: MyMap, story: StoryModel){
    this.overLayText = storyStep.text;

    map.setZoom(storyStep.zoom);

    //needs delays set and zoom storysteps
    //this.steppedZoom(map, storyStep.zoom);
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

  @Output()
  clearMap(){
    StoryService.clearStoryElements(this.storyArray);
  }

  ngAfterViewInit(): void {
    this.mapInit();
  }

  mapInit(){

  }

  mapInitHandler($event){
    this.storyMap = $event;
    this.storyMap.setOptions({
      center: {lat: 48.395315, lng: 9.990424},
      zoom: 14,
      disableDefaultUI: true,
    });
  }

  constructor(private storyService: StoryService) {
  }

  ngOnInit() {
    this.overLayText = "Just initing the overlay text";
  }

}
