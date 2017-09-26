import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Rx";
import {StoryStepModel} from "../models/StoryStep.model";
import {MyLatLng} from "../../app/shared/google-map/mapModels/myLatLng";
import {StoryModel} from "../models/Story.model";
import {MyLatLngBounds} from "../../app/shared/google-map/mapModels/myLatLngBounds";
import {MyPolyline} from "../../app/shared/google-map/mapModels/myPolyline";
import {MyMap} from "../../app/shared/google-map/mapModels/myMap";
import {MyMarker} from "../../app/shared/google-map/mapModels/myMarker";

import {} from '@types/googlemaps';
import SymbolPath = google.maps.SymbolPath;
import spherical = google.maps.geometry.spherical


@Injectable()
export class StoryService{

  constructor( ){ }

  public buildStoryFromConstant(storiesArray){
    let storyArray: StoryModel[] = [];
    for(let val of storiesArray){
      let startLL = new MyLatLng(val.startLatLng.lat, val.startLatLng.lng);
      let endLL = new MyLatLng(val.endLatLng.lat, val.endLatLng.lng);
      let pathArray = [startLL, endLL];

      let stepsArray: StoryStepModel[] = [];
      for(let stepVal of val.steps){
        let newLatLng: MyLatLng;
        if(stepVal.latLng){
          newLatLng = new MyLatLng(stepVal.latLng.lat, stepVal.latLng.lng);
        }
        let newBounds: MyLatLngBounds;
        if(stepVal.bounds){
          newBounds = new MyLatLngBounds(stepVal.bounds.sw, stepVal.bounds.ne);
        }
        let storyStep = new StoryStepModel(stepVal.action, stepVal.text, newLatLng, newBounds);
        storyStep.path = pathArray;
        storyStep.zoom = stepVal.zoom;
        stepsArray.push(storyStep);
      }
      let aStory = new StoryModel(val.text, stepsArray);
      storyArray.push(aStory);
    }
    return storyArray;
  }

  public handleAction(storyStep: StoryStepModel , map: MyMap){
    let aRetThing: string;
    switch (storyStep.action){
      case 0:
        aRetThing = "Add Mah-ka";
        this.addMarker(storyStep.latLng, map);
        break;
      case 1:
        aRetThing = "Focus Path";
        StoryService.panToPath(storyStep.path[0], storyStep.path[1], map);
        break;
      case 2:
        aRetThing = "Add Paff";
        StoryService.panToPath(storyStep.path[0], storyStep.path[1], map);
        this.drawFilledPath(storyStep.path[0], storyStep.path[1], map);
        break;
      case 3:
        aRetThing = "Set bounds";
        StoryService.panToBounds(storyStep.bounds, map);
        break;
      default:
        break;
    }
    return aRetThing;
  }

  public addMarker(position: MyLatLng, map: MyMap, title: string = ""): MyMarker{
    return new MyMarker({
      position: position,
      map: map,
      label: title,
      title: title,
      animation: google.maps.Animation.DROP,
      icon: {
        path: SymbolPath.CIRCLE,
        scale: 15,
        strokeColor: '#4C9CB7',
        strokeWeight: 4
      }
    });
  }

  drawFilledPath(startPoint: MyLatLng, endPoint: MyLatLng, map: MyMap){
    let lineSymbol = {
      path: SymbolPath.FORWARD_OPEN_ARROW,
      scale: 7,
      strokeColor: '#FFB700',
      strokeWeight: 4,
      strokeOpacity: 1,
    };

    let myLine = new MyPolyline({
      strokeColor: '#000000',
      strokeOpacity: 0.1,
      strokeWeight: 2,
      map: map,
      geodesic: true,
      path: [startPoint,endPoint],
      icons: [
        {
          icon: lineSymbol,
          offset: '0%'
        }
      ]

    });

    this.fillPath(myLine, startPoint, endPoint, map);
  }

  fillPath(line: MyPolyline, origin: MyLatLng, end: MyLatLng, map: MyMap){
    let count = 0;
    let fillLine = new MyPolyline({
      strokeColor: '#FFB700',
      strokeOpacity: 1.0,
      strokeWeight: 5,
      map: map,
      geodesic: true,
      path: [origin,origin],

    });
    let lineAnimate = setInterval(() => {//"fills" path once
      let icons = line.get('icons');
      count = (count + 1) % 200;

      icons[0].offset = (count/2) + '%';

      let pathEnd = spherical.interpolate(origin, end, (count === 0)? 1: ((count/2)/100));
      fillLine.setPath([origin,pathEnd]);

      line.set('icons', icons);

      if(count == 0){
        console.log(count);
        console.log(icons[0].offset);
        line.set('icons', []);
        fillLine.set('strokeColor', '#4C9CB7');
        clearInterval(lineAnimate);
      }
    }, 15);
  }

  static panToPath(startPoint: MyLatLng, endPoint: MyLatLng, map: MyMap){
    let pathMidway = spherical.interpolate(startPoint, endPoint, .5);
    map.panTo(pathMidway);
  }

  static panToBounds(bounds: MyLatLngBounds, map: MyMap){
    map.panToBounds(bounds);
  }

  public intervalSet(rounds: number): Observable<any>{
    console.log("Interval set");
    let obs = Observable
      .interval(3000)
      .take(rounds);
    return obs;
  }


}
