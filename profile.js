//grab id from url 
function getAnimalData () {

    const params = new URLSearchParams(window.location.search);
    const idx = params.get("id")
    return(idx) 
}

const dogIndex = getAnimalData()

//get data object from server and convert it to json 
const getAnimalId = async () => {
    try {
    const index = dogIndex

    const response = await fetch(`http://localhost:3000/dogs/${index}`);
    
    const id = await response.json();
    return(id)
    } catch (e) {
        console.log({error: e})
    }
  }
  
  // display dog description by id 

const displayAnimalData = async () => {
    const animalId = await getAnimalId();
    animalDescription()
}

const animalDescription = async () => {
    try{
    const animalId = await getAnimalId();
    let profileContainer = document.querySelector("#profile-container")
    const animalImg = document.createElement("img")
    const animalName = document.createElement("h2")
    const animalDescription = document.createElement("p")
    const animalAge = document.createElement("p")
    animalImg.src = "./images/beagle.png" 
    animalName.textContent = animalId.name 
    animalDescription.textContent = "Gorgeous Lulu is an incredibly sweet girl. While she hasn't had the best start in life and can be a little wary of people when she first meets them, this hasn't dented her enthusiasm or her ability to quickly make friends. She is super intelligent and a keen explorer who wants to investigate every sniff, sound and sight she encounters. Lulu is looking for a dedicated owner who will continue her training and provide her with all the physical and mental stimulation she requires. She forms strong bonds, will make a loyal companion and return your affection tenfold."
    animalAge.innerHTML = animalId.age
    profileContainer.appendChild(animalImg) 
    profileContainer.appendChild(animalName)
    profileContainer.appendChild(animalAge)
    getAnimalGender()
    profileContainer.appendChild(animalDescription)
    chooseButton()
    

    } catch (e) {
        console.log({error: e})
    }

}
//displays male or female icon depending on gender 

const getAnimalGender = async () => {
    const animalId = await getAnimalId();
    console.log(animalId.gender)
    let profileContainer = document.querySelector("#profile-container");
    const animalGender = document.createElement("i");
    animalGender.className = ""
    if(animalId.gender == "female"){
        animalGender.className = "fa-solid fa-venus";

    } else {
         
        animalGender.className = "fa-solid fa-mars";
    }
    profileContainer.appendChild(animalGender)
    
}
//dynamically inserts button to choose and open sumbission page once clicked
const chooseButton =  () => {
    let profileContainer = document.querySelector("#profile-container");
    profileContainer.addEventListener("click", function (e){
        if(e.target.classList.contains('choose-button')){
            window.open("file:./success.html")
        }else {
            console.log("error")
        }

    })

    const chooseButton = document.createElement("button");
    chooseButton.textContent = "Choose this pet"
    chooseButton.classList.add('choose-button')
    profileContainer.appendChild(chooseButton)
}

// const similarAnimal = async () => {
//     const animalId = await getAnimalId();
//     const animalImg = document.createElement("img")
//     const animalName = document.createElement("h2")

// }
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
function directToSocials(event) {
    //let classLists = event.target.classList;
    if (event.target.id === 'twitter-btn') {
      window.open('https://twitter.com/Battersea_');
    } else {
      window.open('https://www.instagram.com/battersea/?hl=en');
    }
  }

displayAnimalData()
const backHome = document.querySelector('.fa-house');
backHome.addEventListener("click", homeButton)
const previousPage = document.querySelector('.fa-arrow-left')
previousPage.addEventListener("click", backButton)

const twitter = document.querySelector('.fa-twitter');
const instagram = document.querySelector('.fa-instagram');
twitter.addEventListener('click', directToSocials);
instagram.addEventListener('click', directToSocials);

