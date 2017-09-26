import {StoryStepModel} from "./StoryStep.model";
import {MyLatLng} from "../../app/shared/google-map/mapModels/myLatLng";
export interface IStoryModel{

  text: string;
  startLatLng: MyLatLng;
  endLatLng: MyLatLng;
  steps: StoryStepModel[];
}
