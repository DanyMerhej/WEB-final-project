
/* global element, google */


/*MAP API FUNCTION*/

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myLatLng = {lat: 33.944930899999996, lng: 35.5983198};
    var mapOptions = {
        center: myLatLng,
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map

    });
}


/*SWITCH BETWEEN MENU CLASSES*/


$(document).ready(function () {
    $('div.hidden').fadeIn(500).removeClass('hidden');
});
$(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= 600) {
        $('#menu').addClass('small');
        $('#menu ul li').addClass('smallli');
        $('#menu p a').addClass('smallp');
        $('#logo').fadeIn();
       
    } else{
        $('#menu').removeClass('small');
        $('#menu ul li').removeClass('smallli');
        $('#menu p a').removeClass('smallp');
        $('#logo').fadeOut();
        
        
    }
});

    