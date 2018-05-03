function initMap() {

  // Create the map
  const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 15,
    center: {
      lat: 58.147,lng: 7.995}
    });
    
    map.data.loadGeoJson('data.json');

  const infoWindow = new google.maps.InfoWindow();
  
  map.data.addListener('click', event => {

    let name = event.feature.getProperty('name');
    let position = event.feature.getGeometry().get();
    let content = `<h2>${name}</h2>`
    
    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
  
}
