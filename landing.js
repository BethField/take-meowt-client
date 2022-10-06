let slideIndex = 0;
showSlides();

//gives carousel slideshow functionality 

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  //when carousel finishes, slide index returns back to 1 and starts again  
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}

//button functionality 

function directToSocials(event) {
  //let classLists = event.target.classList;
  if (event.target.id === 'twitter-btn') {
    window.open('https://twitter.com/Battersea_');
  } else {
    window.open('https://www.instagram.com/battersea/?hl=en');
  }
}

const twitter = document.querySelector('.fa-twitter');
const instagram = document.querySelector('.fa-instagram');
twitter.addEventListener('click', directToSocials);
instagram.addEventListener('click', directToSocials);


