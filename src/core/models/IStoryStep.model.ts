import {MyLatLng} from "../../app/shared/google-map/mapModels/myLatLng";
import {MyLatLngBounds} from "../../app/shared/google-map/mapModels/myLatLngBounds";

export interface IStoryStepModel{
  action: string;
  zoom: number;
  delay: number;//in milliseconds
  text?: string;
  latLng?: MyLatLng;
  bounds?: MyLatLngBounds;
  path: MyLatLng[];
}
