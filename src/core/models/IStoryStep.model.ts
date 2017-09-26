import {MyLatLng} from "../../app/shared/google-map/mapModels/myLatLng";
import {MyLatLngBounds} from "../../app/shared/google-map/mapModels/myLatLngBounds";

export interface IStoryStepModel{
  action: StoryStepActions;
  zoom: number;
  text?: string;
  latLng?: MyLatLng;
  bounds?: MyLatLngBounds;
  path: MyLatLng[];
}

export enum StoryStepActions{
  ADD_MARKER,
  PATH_FOCUS,
  ADD_PATH,
  PAN_TO_BOUNDS

}
