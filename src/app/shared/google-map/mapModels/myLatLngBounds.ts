import {} from '@types/googlemaps';
import LatLng = google.maps.LatLng;
import LatLngLiteral = google.maps.LatLngLiteral;
import LatLngBounds = google.maps.LatLngBounds;

export class MyLatLngBounds extends LatLngBounds {

  constructor(sw?: LatLng|LatLngLiteral, ne?: LatLng|LatLngLiteral) {
    super(sw, ne);
  }

}
