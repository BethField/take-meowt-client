console.log("hello")

const homeButton = (e) => {
    console.log(e.target)
    if(e.target.className == "fa-solid fa-house") {
        window.open("file:./landing.html")
    } 
}
const backButton = (e) => {
    console.log(e.target)
    if(e.target.className == "fa-solid fa-arrow-left"){
        window.open("file:./response.html")
    }
}

const backToHome = () => {
    
    goBackHome.addEventListener("click", function (e){
        console.log(e.target.innerHTML)
        if(e.target.innerHTML = 'Back to home'){
            window.open("file:./landing.html", "_self")
        }else {
            console.log("error")
        }

    })
    
}


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

const backHome = document.querySelector('.fa-house');
backHome.addEventListener("click", homeButton);
const previousPage = document.querySelector('.fa-arrow-left');
previousPage.addEventListener("click", backButton);

const goBackHome = document.querySelector("button")
goBackHome.addEventListener("click", backToHome);
