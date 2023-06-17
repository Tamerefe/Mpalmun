// Set the date we're counting down to
var countDownDate = new Date("May 21, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element
  document.getElementById("day").innerHTML = " " + days + " :";
  document.getElementById("hour").innerHTML = hours + " :";
  document.getElementById("minute").innerHTML = minutes + " :";
  document.getElementById("second").innerHTML = seconds + " ";

}, 1000);

//Fade

function mouseOversochum() {
  document.getElementById("sochum").style.display = "block";
}

function mouseOutsochum() {
  document.getElementById("sochum").style.display= "none";
}

//

function mouseOverdisec() {
  document.getElementById("disec").style.display = "block";
}

function mouseOutdisec() {
  document.getElementById("disec").style.display= "none";
}

//

function mouseOverspecpol() {
  document.getElementById("specpol").style.display = "block";
}

function mouseOutspecpol() {
  document.getElementById("specpol").style.display= "none";
}

//

function mouseOvermexican() {
  document.getElementById("mexican").style.display = "block";
}

function mouseOutmexican() {
  document.getElementById("mexican").style.display= "none";
}


// Kontrol Edilecek
// function myFunctionfade() {
//    location.reload();
// }


// function FarugunClickiFunction() {
//   window.open("Conference.html");
//   setTimeout(function(){
//   window.scrollBy(0,1000)
// },4000);}
//
// setTimeout(function(){ },6000);

// w=window.open("http://stackoverflow.com");
// setTimeout(function() { w.scrollTo(0,150) }, 1000);
