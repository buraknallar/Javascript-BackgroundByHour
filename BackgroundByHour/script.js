//numbers for background change hours
var morning=6
var noon=12
var evening=18
var night=22

// initialize clock and message
var clock = document.getElementById('clock');
var message = document.getElementById("message");


var currTime = function()
{

 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Change meridian to PM if its afternoon
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

    //Substract 12 from hour to show as PM
	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Show minutes start with 0 if minute smaller then 10
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Show minutes start with 0 if minute smaller then 10
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // combine hours as string
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

var updater = function() 
{
  var hour = new Date().getHours();
  var messageText;
  var image;



  //if else section to make changes by choosen hours
  
  if (hour>=morning&&hour<noon)
  {
    image = "url('img/morning.jpg')";
    messageText = "GOOD MORNING";
    message.style.color="darkblue"
    clock.style.color="darkblue"
  }
  else if (hour>=noon&&hour<evening)
  {
    image = "url('img/noon.jpg')";
    messageText = "GOOD AFTERNOON";
    message.style.color="red"
    clock.style.color="red"
  }
  else if (hour>=evening&&hour<night)
  {
    image = "url('img/evening.jpg')";
    messageText = "GOOD EVENING";
    message.style.color="indigo"
    clock.style.color="indigo"
  }
  else
  {
    image = "url('img/night.jpg')";
    messageText = "GOOD NIGHT";
    message.style.color="red"
    clock.style.color="red"
    
  }

 
  message.innerText = messageText;
  document.body.style.backgroundImage = image;

  


  
 
  currTime();
};
updater();

//setinterval function to call updater function every second
var oneSecond = 1000;
setInterval( updater, oneSecond);