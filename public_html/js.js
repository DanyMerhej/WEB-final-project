/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





   function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(33.944930899999996, 35.5983198),
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}



    