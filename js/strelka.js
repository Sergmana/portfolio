window.onload = function() {myMove()}
function myMove() {
    var elem = document.getElementById("strelka"); 
    var pos = 70%;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 80%) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + '%'; 
        }
    }
}