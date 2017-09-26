import {} from '@types/googlemaps';
import Map = google.maps.Map;
import MapOptions = google.maps.MapOptions;

export class MyMap extends Map {

  constructor(mapDiv: Element|null, opts?: MapOptions) {
    super(mapDiv, opts);
  }

}
