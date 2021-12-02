//About me tab (carousel)

let slidePosition = 0;
const slide = document.getElementsByClassName('image');
const totalSlide = slide.length;

document.getElementById('next').addEventListener('click',function(){
    movetoNextSlide();
});

document.getElementById('prev').addEventListener('click',function(){
    movetoPrevSlide();
});

function updateSlidePosition(){
    
    for (let move of slide){
        move.classList.remove('image--visible');
        move.classList.add('image--hidden');
    }

    slide[slidePosition].classList.add('image--visible');
}


function movetoNextSlide() {

    if (slidePosition === totalSlide -1){
        slidePosition = 0;
    } else{
        slidePosition++;
    }

    updateSlidePosition();
};

function movetoPrevSlide(){

    if (slidePosition === 0){
        slidePosition = totalSlide -1;
    } else{
        slidePosition--;
    }

    updateSlidePosition();
};





// Qualification tab (toggle between edu and work button)

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
var inputbox = document.getElementsByClassName('box');

function mythirdFunction(){
    
    text.innerHTML = 'Thanks!';
    text.classList.add('active');
};