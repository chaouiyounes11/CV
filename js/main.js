$(document).ready(function(){
    $("#leClic").click(function(){
        $("#formulaire").fadeIn(900);
        $("#formulaire").css("display", "flex");

    });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


function initMap()
{ var uluru = {lat: 43.425190, lng: 6.768370
};
 var map = new google.maps.Map(document.getElementById('map'), { zoom: 13, center: uluru
 });
 var marker = new google.maps.Marker({ position: uluru, map: map }); }
