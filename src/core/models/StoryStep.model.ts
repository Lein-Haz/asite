import {IStoryStepModel, StoryStepActions} from "./IStoryStep.model";
import {MyLatLng} from "../../app/shared/google-map/mapModels/myLatLng";
import {MyLatLngBounds} from "../../app/shared/google-map/mapModels/myLatLngBounds";
import LatLngLiteral = google.maps.LatLngLiteral;
import {MyPolyline} from "../../app/shared/google-map/mapModels/myPolyline";
export class StoryStepModel implements IStoryStepModel{
  action: StoryStepActions;
  zoom: number;
  text?: string;
  latLng?: MyLatLng;
  bounds?: MyLatLngBounds;
  path: MyLatLng[];

  constructor(action: StoryStepActions, text? : string, latLng?: MyLatLng, bounds?: MyLatLngBounds){
    this.action = action;
    this.text = text;
    this.latLng = latLng;
    this.bounds = bounds;
  }
}
