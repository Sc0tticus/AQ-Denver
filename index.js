const baseURL = 'http://localhost:4000/air_qualities';

fetch(baseURL)
  .then(response => response.json())
  .then(console.log)

  // function heatMapData(geojson){
  //   console.log(geojson)
  //   return { lat: o.geometry.coordinates[1], lng: o.geometry.coordinates[0], value: o.properties.snr_read }
  // }
  
  
  // = geojson.features.map((o) => {
  //   return { lat: o.geometry.coordinates[1], lng: o.geometry.coordinates[0], value: o.properties.snr_read }
  // })