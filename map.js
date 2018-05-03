function initMap() {

  // Create the map
  const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 15,
    center: {
      lat: 58.147,
      lng: 7.995
    }
  });

}
