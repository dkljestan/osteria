

	function fun(){
			document.getElementById('mypic').src="images/slider1.jpeg";
		}
	function fun2(){
			document.getElementById('mypic').src="images/slider2.jpeg";
		}
	function fun3(){
			document.getElementById('mypic').src="images/slider3.jpeg";
	}

setInterval(fun, 3000);
setInterval(fun2,6000);
setInterval(fun3,9000);

document.querySelector(".icon").addEventListener("click",function(e){
	e.preventDefault();
	console.log('david');
	document.querySelector(".navbar").classList.toggle("isOpen");	
});








window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    $('html,body').animate({
    	"scrollTop": 0 
    },1000);
}
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


	function com1(){
			document.getElementById('text1').style.display = 'block';
			document.getElementById('text2').style.display = 'none';
			document.getElementById('text3').style.display = 'none';
	}
	function com2(){
		document.getElementById('text1').style.display = 'none';
		document.getElementById('text2').style.display = 'block';
		document.getElementById('text3').style.display = 'none';
	}
	function com3(){
		document.getElementById('text1').style.display = 'none';
		document.getElementById('text2').style.display = 'none';
		document.getElementById('text3').style.display = 'block';
	}
	
