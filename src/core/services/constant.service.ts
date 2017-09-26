
export class ConstantService {
  public static FLEX_LAYOUT = {
    NO_GROW: '0 1 auto'
  };

  public static STORIES = [
    {
      text: "Part1",
      startLatLng: {lat: 48.395315, lng: 9.990424},
      endLatLng: {lat: 47.782232, lng: 9.613402},
      steps: [
        {
          action: 0,
          text: "Started here",
          latLng: {
            lat: 48.395315,
            lng: 9.990424
          },
          bounds: null,
          zoom: 13
        }, {
          action: 2,
          text: "moved here",
          latLng: null,
          bounds: null,
          zoom: 9
        }, {
          action: 0,
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
      startLatLng: {lat: 47.782232, lng: 9.613402},
      endLatLng: {lat: 47.691274, lng: 9.818637},
      steps: [
        {
          action: 1,
          text: "Spent a lot of time here",
          latLng: null,
          bounds: null,
          zoom: 11
        }, {
          action: 2,
          text: "Bounced around some more",
          latLng: null,
          bounds: null,
          zoom: 11
        }, {
          action: 0,
          text: "Was here very briefly",
          latLng: {lat: 47.691274, lng: 9.818637},
          bounds: null,
          zoom: 11
        }
      ]
    }, {
      text: "Part3",
      startLatLng: {lat: 47.691274, lng: 9.818637},
      endLatLng: {lat: 47.782232, lng: 9.613402},
      steps: [
        {
          action: 2,
          text: "Moved back before too long",
          latLng: null,
          bounds: null,
          zoom: 11
        }, {
          action: 0,
          text: "Back here for a time",
          latLng: {lat: 47.782232, lng: 9.613402},
          bounds: null,
          zoom: 11
        }
      ]
    }, {
      text: "Part4",
      startLatLng: {lat: 47.782232, lng: 9.613402},
      endLatLng: {lat: 38.589906, lng: -90.225220},
      steps: [
        {
          action: 3,
          text: "But then a big change",
          latLng: null,
          bounds: {
            sw: {lat: 9.474254308035103, lng: -138.76959851589015},
            ne: {lat: 69.30921854701235, lng: 60.4289101249999}
          },
          zoom: 3
        }, {
          action: 2,
          text: "Back here for a time",
          latLng: null,
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
      LAT: 38.589906,
      LNG: -90.225220
    },
    COLUMBIA: {
      LAT: 38.940014,
      LNG: -92.324638
    },
    SF_BAY: {
      LAT: 37.625891,
      LNG: -122.243500
    },


  };
}
