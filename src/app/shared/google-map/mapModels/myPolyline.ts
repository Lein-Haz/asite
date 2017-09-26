import {} from '@types/googlemaps';
import Polyline = google.maps.Polyline;
import PolylineOptions = google.maps.PolylineOptions;

export class MyPolyline extends Polyline {

  constructor(opts?: PolylineOptions) {
    super(opts);
  }

}
