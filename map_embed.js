// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -25.363, lng: 131.044 },
//     zoom: 5,
//   });
//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.createElement("button");

//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         },
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
//  //Nearby search
//   const searchInput = document.getElementById("places-search");
//   const searchButton = document.getElementById("search-button");

//   // Add a click event listener to the search button
//   let query;
//   searchButton.addEventListener("click", () => {
//     query = searchInput.value;

//     const request = {
//       query: query,
//       fields: ["name", "geometry"],
//     };

//     const service = new google.maps.places.PlacesService(map);

//     service.findPlaceFromQuery(request, (results, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         const place = results[0];
//         if (place) {
//           const place_pos = place.geometry.location;
//           infoWindow.setPosition(place_pos);
//           infoWindow.setContent(place.name);
//           infoWindow.open(map);
//           map.setCenter(place_pos);
//           map.setZoom(15);
//         }
//       } else {
//         window.alert("No places found. Please try a different query.");
//       }})
//     })

//     autocomplete = new google.maps.places.Autocomplete(document.getElementById('places-search'),
//     {
//       types:['establishment'],
//       componentRestrictions: {'country':['AU']},
//       fields: ['place_id','geometry','name']
//     })

    
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation.",
//   );
//   infoWindow.open(map);
// }

// window.initMap = initMap

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -25.363, lng: 131.044 },
    zoom: 5,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
 //Nearby search
  const searchInput = document.getElementById("places-search");
  const searchButton = document.getElementById("search-button");

  // Add a click event listener to the search button
  let query;
  searchButton.addEventListener("click", () => {
    query = searchInput.value;

    const request = {
      query: query,
      fields: ["name", "geometry"],
    };

    const service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const place = results[0];
        if (place) {
          const place_pos = place.geometry.location;
          infoWindow.setPosition(place_pos);
          infoWindow.setContent(place.name);
          infoWindow.open(map);
          map.setCenter(place_pos);
          map.setZoom(15);
        }
      } else {
        window.alert("No places found. Please try a different query.");
      }})
    })

    autocomplete = new google.maps.places.Autocomplete(document.getElementById('places-search'),
    {
      types:['establishment'],
      componentRestrictions: {'country':['AU']},
      fields: ['place_id','geometry','name']
    })

    
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

window.initMap = initMap
