window.onscroll = function() {typeWriter()};
var i = 0;
var txt = 'Hi, we are a Ukranian Studio in the center of technical progress. We will fine tune your ad, make a site for you , get the top in Google, and make all in best traditions of internet marketing. Also, we will pack your brand, create a corporate style system, and many many more.We believe in having a good time while doing what we love, and we do love what we do!'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}