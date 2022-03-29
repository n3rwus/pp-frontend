// let mapOptions = {
//     center:[51.958, 9.141],
//     zoom:10
// }
// let map = new L.map('map' , mapOptions);
// let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// map.addLayer(layer);
// let marker = new L.Marker([51.958, 9.141]);
// marker.addTo(map);
// L.Map.invalidateSize();

var adr = document.getElementById("adr");
var lat = 50.2241331;
var lon = 18.7270541;
var map = L.map('map').setView([lat,lon], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

document.addEventListener('keyup',function(e){
    if(e.key=="Enter"){
        fetch(encodeURI('https://nominatim.openstreetmap.org/search/'+adr.value+'?format=json&addressdetails=1&limit=1&polygon_svg=1'))
        .then(result => result.json())
        .then((output) => {
            lat = output[0].lat;
            lon = output[0].lon;
            map.panTo([lat, lon]);
            let marker1 = L.marker([lat, lon]).addTo(map).bindPopup(adr.value).openPopup();
            let group = new L.featureGroup([marker1]);
            map.fitBounds(group.getBounds());
        }).catch(err => {
            console.error(err);
        });
    }
});





