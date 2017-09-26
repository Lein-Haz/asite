import {} from '@types/googlemaps';
import Circle = google.maps.Circle;
import CircleOptions = google.maps.CircleOptions;

export class MyCircle extends Circle {

  constructor(opts?: CircleOptions) {
    super(opts);
  }

}
