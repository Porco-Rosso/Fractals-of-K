$(document).ready(function () {
    run();
    weatherfunction();
});

var speed = changetime;

function fader1() {
$('.overlay').velocity({
       opacity: 0,
     }, 400)
}

function fader2(){
$('.overlay').delay( ((speed * 1000) -1100) )
$('.overlay').velocity({
       opacity: 0.8,
     }, 700)
}

function run() {
    
    fader1();
    
    //make the time//
    var date = new Date();
    var hour = date.getHours();
    var minute = (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
    
    //24 hour settings// 
    if (!(hours24)) {
        hour = hour > 12 ? hour - 12 : hour;
    }
    
    //Get windowsize
    var windowwidth = window.innerWidth;
    var windowheight = window.innerHeight;
    

//Generate Trianglify backgrounds :) //    
    var t = new Trianglify({
        cellsize: 90,
         });
    var pattern = t.generate(windowwidth, windowheight);
     document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
    
  var date =  moment().format('Do');
  var month =  moment().format('MMMM');
  var year = moment().format('YYYY');

      
// inserting shit into the html and css //    
    var Level = Level
    
    $(".clock").html(hour + ":" + minute);
    $(".date").html( "  " + date +" of " + month + ", " + year );
    $(".battery").html("Battery at " + Level + "%");

    $(".overlay").css('width', windowwidth);
    $(".overlay").css('height', windowheight);
    // statusbar overlay
    $(".overlay4statusbar").css('width', windowwidth);
    $(".overlay4statusbar").css('height', windowheight);
    
    setTimeout("run();", (1000 * speed));
    fader2();
}

//weather temp // 

    

function weatherfunction() {
  $.simpleWeather({
    location: weatherlocation,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      temp = weather.temp+'&deg;'+weather.units.temp;
        $(".weather").html("It is currently " + temp);
    },
    error: function(error) {
      $(".weather").html('<p>'+error+'</p>');
    }
  });   
    
    setTimeout("weatherfunction();", 600000);
      };