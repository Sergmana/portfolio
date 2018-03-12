window.onscroll = function() {typeWriter()};
var i = 0;
var txt = 'Also, we will pack your brand, create a corporate style system, and many many more.'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}