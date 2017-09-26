import {} from '@types/googlemaps';
import LatLng = google.maps.LatLng;

export class MyLatLng extends LatLng {

  constructor(lat: number, lng: number, noWrap?: boolean) {
    super(lat, lng, noWrap);
  }

}
