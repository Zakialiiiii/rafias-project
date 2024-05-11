


var sliders = document.querySelectorAll('.slider');
var slideIndex = 0;
function showSliders(){
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > sliders.length) {
        slideIndex = 1;
    } 
    sliders[slideIndex-1].style.display = "block";
    setTimeout(showSliders, 4000);
}
showSliders();


function increment() {
    var span = document.getElementById('quantity');
    span.textContent = parseInt(span.textContent) + 1;
}

function decrement() {
    var span = document.getElementById('quantity');
    if (parseInt(span.textContent) > 0) {
        span.textContent = parseInt(span.textContent) - 1;
    }
}