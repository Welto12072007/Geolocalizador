let map;
let geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -29.6422, lng: -50.7956 },
        zoom: 10,
    });
    geocoder = new google.maps.Geocoder();
}

function geolocate() {
    const address = document.getElementById("address").value;
    
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);

            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        } else {
            alert("Geolocalização falhou: " + status);
        }
    });
}
