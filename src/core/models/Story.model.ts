import {IStoryModel} from "./IStory.model";
import {StoryStepModel} from "./StoryStep.model";
import {MyLatLng} from "../../app/shared/google-map/mapModels/myLatLng";

export class StoryModel implements IStoryModel{
  text: string;
  startLatLng: MyLatLng;
  endLatLng: MyLatLng;
  steps: StoryStepModel[];

  constructor(text: string, steps: StoryStepModel[]){
    this.text = text;
    this.steps = steps;
  }
}
