var slideIndex = 0;
showSlide();

function showSlide() {
  var k;
  var slide = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dots");
  for (k = 0; k< slide.length; k++) {
    slide[k].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}    
  for (k = 0; k < dots.length; k++) {
    dots[k].className = dots[k].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlide, 3000); // Change image every 3 seconds
}