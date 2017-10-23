let name = "Gayle";
console.log(name);

// Get the modal
$('.modal').hide();
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName('direction-button');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
if (btn != null) {
  btn.onclick = function() {
    modal.style.display = "flex";
    myMap();
  }

}


// When the user clicks on <span> (x), close the modal
if (span != null) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(37.407, -122.08),
    zoom: 17
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {
      lat: 37.408,
      lng: -122.08
    }
  });
  marker.addListener('click', function() {
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent('<div style="color: gray"><strong >새누리교회(New Community Baptist Church)</strong><br>' +
      '<br>94043 California, Mountain View<br>W Middlefield Rd</div>' +
      '<br><a href="https://www.google.com/maps/place/%EC%83%88%EB%88%84%EB%A6%AC%EA%B5%90%ED%9A%8C(New+Community+Baptist+Church)/@37.4079381,-122.0821998,17z/data=!3m1!4b1!4m5!3m4!1s0x808fb7526e5f09bd:0x696f2dacd68a4163!8m2!3d37.4079381!4d-122.0800111?hl=en-US">View on GoogleMaps </a>');
    infowindow.open(map, marker)
  });
  // marker.addListener('click', function() {
  //   var infowindow = new google.maps.InfoWindow();
  //   infowindow.setContent('<div><strong>새누리교회(New Community Baptist Church)</strong><br>' +
  //     '<br>94043 California, Mountain View<br>W Middlefield Rd</div>');
  //   infowindow.open(map, this);
  // });
  marker.setMap(map);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }

}
