function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(16.458740, 107.591851),
    zoom: 15,
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f5f5f5"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#dedede"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#333333"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f2f2f2"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      }
    ]
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

$(window).scroll(function(){
  var wScroll = $(this).scrollTop()
  var hWindow = $(window).height()

  // Back to top show
  if (wScroll > $(window).height()) {
    $(".back-to-top").fadeIn();
  }
  else {
    $(".back-to-top").fadeOut();
  }

})

// Expand menu
var isTopBarExpand = false
$('.top-bar .expand-button').click(function() {
  if (!isTopBarExpand) {
    isTopBarExpand = true;
    $('#top-bar').addClass('is-expand');
  }
  else {
    isTopBarExpand = false;
    $('#top-bar').removeClass('is-expand');
  }
})

// Contact Form
$('#contact_form').submit(function(event) {
  event.preventDefault();
  event.stopPropagation();

  const firstName = $("#form_firstName").val()
  const lastName = $("#form_lastName").val()
  const company = $("#form_company").val()
  const email = $("#form_email").val()
  const country = $("#form_country").val()
  const interest = $("#form_interest").val()
  const message = $("#form_message").val()

  const formdata = {
    first_name: firstName,
    last_name: lastName,
    company,
    email,
    country,
    interest,
    message
  }

  $('#form_button').text('submitting...')

  $.ajax({
    type: "POST",
    url: "https://paywithflow.pw/paywithflow-website/send-contact",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: JSON.stringify(formdata),
    success: function() {
      $('#contact_form').each(function(){
        this.reset()
      })
      $('#form_button').text('submit')
      $('#form_notification').text('Your message has been sent!')
      setTimeout(function(){
        $('#form_notofication').hide()
      }, 4000);
    },
    error: function(error) {
      $('#form_button').text('submit')
      $('#form_notification').text('Something went wrong!')
      setTimeout(function(){
        $('#form_notofication').hide()
      }, 4000);
    },
  })
})

// Back to Top
$(".back-to-top").click(function () {
   $("html, body").animate({scrollTop: 0}, 1100);
});
