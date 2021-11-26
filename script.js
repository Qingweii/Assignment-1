//Carousel script



// Qualification tab 

var x = document.getElementById('work');
var y = document.getElementById('education');

function myFunction(){
    x.style.display = 'block';
    y.style.display = 'none';
}

function mysecondFunction(){
    y.style.display = 'block';
    x.style.display = 'none';
}

// Contact Me (submit button)

var text = document.getElementById('button');
var box = document.querySelectorAll('.box');


function mythirdFunction(){

    text.innerHTML = 'Thanks!';
    text.classList.add('active');
};