import {IStoryStepModel} from "./IStoryStep.model";
import {MyLatLng} from "../../app/shared/google-map/mapModels/myLatLng";
import {MyLatLngBounds} from "../../app/shared/google-map/mapModels/myLatLngBounds";
import LatLngLiteral = google.maps.LatLngLiteral;
export class StoryStepModel implements IStoryStepModel{
  action: string;
  zoom: number;
  text?: string;
  latLng?: MyLatLng;
  bounds?: MyLatLngBounds;
  path: MyLatLng[];

  constructor(action: string, text? : string, latLng?: MyLatLng, bounds?: MyLatLngBounds){
    this.action = action;
    this.text = text;
    this.latLng = latLng;
    this.bounds = bounds;
  }
}
