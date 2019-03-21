// jQuery to get full year
// $('#year').text(new Date().getFullYear())
// Get full year
var date = new Date().getFullYear();
document.getElementById('year').innerHTML = date;

// Init Scrollspy
$('body').scrollspy({target: '#navigation'});

// Add smooth scrolling on all links inside the navbar
$("#navigation a").on('click', function(e) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});
