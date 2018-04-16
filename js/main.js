$(document).ready(function(){
    $("#leClic").click(function(){
        $("#formulaire").fadeIn(900);
        $("#formulaire").css("display", "flex");

    });
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});


function initMap()
{ var frejus = {lat: 43.425190, lng: 6.768370
};
 var map = new google.maps.Map(document.getElementById('map'), { zoom: 13, center: frejus
 });
 var marker = new google.maps.Marker({ position: frejus, map: map }); }
