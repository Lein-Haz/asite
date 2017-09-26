import {} from '@types/googlemaps';
import SymbolPath = google.maps.SymbolPath;
export class ConstantService {
  public static FLEX_LAYOUT = {
    NO_GROW: '0 1 auto'
  };

  public static MAP_ACTIONS = {
    ADD_MARKER: "add_marker",
    ADD_START_MARKER: "add_start_marker",
    ADD_END_MARKER: "add_end_marker",
    ADD_PATH: "add_path",
    FOCUS_ADD_PATH: "focus_add_path",
    FOCUS_BOUNDS: "focus_bounds",
    FOCUS_PATH: "focus_path",
  };

  public static ICON_SHAPES = {
    ACTIVE_CIRCLE: {
      path: SymbolPath.CIRCLE,
      scale: 16,
      strokeColor: '#4C9CB7',
      strokeWeight: 4,
      fillColor: '#FFB700',
      fillOpacity: .75
    },
    INACTIVE_CIRCLE: {
      path: SymbolPath.CIRCLE,
      scale: 4,
      strokeColor: '#4C9CB7',
      strokeWeight: 4
    },
    ANIMATED_ARROW: {
      path: SymbolPath.FORWARD_OPEN_ARROW,
      scale: 7,
      strokeColor: '#FFB700',
      strokeWeight: 4,
      strokeOpacity: 1,
    }
  };

  public static STORIES = [
    {
      text: "Part1",
      startMarker: {lat: 48.395315, lng: 9.990424},
      endMarker: {lat: 47.782232, lng: 9.613402},
      steps: [
        {
          action: ConstantService.MAP_ACTIONS.ADD_START_MARKER,
          text: "Started here",
          latLng: {
            lat: 48.395315,
            lng: 9.990424
          },
          bounds: null,
          zoom: 13
        }, {
          action: ConstantService.MAP_ACTIONS.FOCUS_ADD_PATH,
          text: "moved here",
          latLng: null,
          bounds: null,
          zoom: 9
        }, {
          action: ConstantService.MAP_ACTIONS.ADD_END_MARKER,
          text: "Stayed here for awhile",
          latLng: {
            lat: 47.782232,
            lng: 9.613402
          },
          bounds: null,
          zoom: 9
        }
      ]
    }, {
      text: "Part2",
      startMarker: {lat: 47.782232, lng: 9.613402},
      endMarker: {lat: 47.691274, lng: 9.818637},
      steps: [
        {
          action: ConstantService.MAP_ACTIONS.FOCUS_PATH,
          text: "Spent a lot of time here",
          latLng: null,
          bounds: null,
          zoom: 11
        }, {
          action: ConstantService.MAP_ACTIONS.FOCUS_ADD_PATH,
          text: "Bounced around some more",
          latLng: null,
          bounds: null,
          zoom: 11
        }, {
          action: ConstantService.MAP_ACTIONS.ADD_END_MARKER,
          text: "Was here very briefly",
          latLng: {lat: 47.691274, lng: 9.818637},
          bounds: null,
          zoom: 11
        }
      ]
    }, {
      text: "Part3",
      startMarker: {lat: 47.691274, lng: 9.818637},
      endMarker: {lat: 47.782232, lng: 9.613402},
      steps: [
        {
          action: ConstantService.MAP_ACTIONS.ADD_PATH,
          text: "Moved back before too long",
          latLng: null,
          bounds: null,
          zoom: 11
        }, {
          action: ConstantService.MAP_ACTIONS.ADD_END_MARKER,
          text: "Back here for a time",
          latLng: {lat: 47.782232, lng: 9.613402},
          bounds: null,
          zoom: 11
        }
      ]
    }, {
      text: "Part4",
      startMarker: {lat: 47.782232, lng: 9.613402},
      endMarker: {lat: 38.624519, lng: -90.185043},
      steps: [
        {
          action: ConstantService.MAP_ACTIONS.FOCUS_BOUNDS,
          text: "But then a big change.",
          latLng: null,
          bounds: {
            sw: {lat: 9.474254308035103, lng: -138.76959851589015},
            ne: {lat: 69.30921854701235, lng: 60.4289101249999}
          },
          zoom: 3
        }, {
          action: ConstantService.MAP_ACTIONS.ADD_PATH,
          text: "Moved somewhere very different",
          latLng: null,
          bounds: null,
          zoom: 3
        }, {
          action: ConstantService.MAP_ACTIONS.ADD_END_MARKER,
          text: "Ended up going through most of school here",
          latLng: {
            lat: 38.624519,
            lng: -90.185043
          },
          bounds: null,
          zoom: 3
        }
      ]
    }
  ];

  public static COORDINATES = {
    ULM: {
      LAT: 48.395315,
      LNG: 9.990424
    },
    RAVENSBURG: {
      LAT: 47.782232,
      LNG: 9.613402
    },
    WANGEN: {
      LAT: 47.691274,
      LNG: 9.818637
    },
    ST_LOUIS: {
      LAT: 38.624519,
      LNG: -90.185043
    },
    COLUMBIA: {
      LAT: 38.947736,
      LNG: -92.322986
    },
    SF_BAY: {
      LAT: 37.625891,
      LNG: -122.243500
    },


  };
}
