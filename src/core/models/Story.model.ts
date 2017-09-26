import {IStoryModel} from "./IStory.model";
import {StoryStepModel} from "./StoryStep.model";
import {MyMarker} from "../../app/shared/google-map/mapModels/myMarker";

export class StoryModel implements IStoryModel{
  text: string;
  startMarker: MyMarker;
  endMarker: MyMarker;
  steps: StoryStepModel[];

  constructor(text: string, steps: StoryStepModel[]){
    this.text = text;
    this.steps = steps;
  }
}
