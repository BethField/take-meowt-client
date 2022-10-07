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
    const breed = document.createElement("p")
    const aboutMe = document.createElement("h3")

    
    animalImg.className = "profile-picture"
    animalName.className = "animal-name" 
    animalDescription.className = "animal-description" 
    animalAge.className = "animal-age"
    aboutMe.className = "about-me"
    breed.className = "breed"
 

    animalImg.src = "./images/spaniel.jpeg" 
    animalName.textContent = ` ${animalId.name}  ${checkGender(animalId.gender)}`;
    animalDescription.textContent = `${animalId.name} is an incredibly sweet ${animalId.gender}. While ${checkPronoun(animalId.gender)} hasn't had the best start in life and can be a little wary of people when ${checkPronoun(animalId.gender)} first meets them, this hasn't dented her enthusiasm or ${checkPronounTwo(animalId.gender)} ability to quickly make friends. ${animalId.name}'s main traits are ${animalId.temperament[0]}, ${animalId.temperament[1]}, ${animalId.temperament[2]} and ${animalId.temperament[3]}.`

    animalAge.textContent = `Age: ${animalId.age} years old`
    
    breed.textContent = ` Breed: ${animalId.breed} `
    aboutMe.textContent = "About me "
    // const animalGender = await getAnimalGender()

    // const animalGender = await getAnimalGender()
    profileContainer.appendChild(animalImg);
    profileContainer.appendChild(animalName);
    profileContainer.appendChild(breed);
    profileContainer.appendChild(animalAge);
    profileContainer.appendChild(aboutMe);


    

    // getAnimalGender();
    profileContainer.appendChild(animalDescription);
    
   
   

    } catch (e) {
        console.log({error: e})
    }

}

const displayMoreInfo = async () => {
    const animalId = await getAnimalId();

    let moreInformation = document.querySelector('#more-info-section');
    console.log(moreInformation)
    const moreInfo = document.createElement("h3")
    const moreInfoTrait = document.createElement("p")
    const moreInfoTraitTwo = document.createElement("p")
    const moreInfoTraitThree = document.createElement("p")

    moreInfo.className = "more-info-title"

    moreInfo.textContent = "More Info"
    moreInfoTrait.textContent = "Good with children: " +  checkorCross(animalId.good_with_kids)
    moreInfoTraitTwo.textContent = `Good with strangers:  ${checkorCross(animalId.good_with_strangers)}`
    moreInfoTraitThree.textContent = `Hypoallergenic:  ${checkorCross(animalId.hypoallergenic)}`

    moreInformation.appendChild(moreInfo) 
    moreInformation.appendChild(moreInfoTrait)
    moreInformation.appendChild(moreInfoTraitTwo)
    moreInformation.appendChild(moreInfoTraitThree)
    // chooseButton()

}


//displays check or cross if animal property returns true or false 

const checkorCross =  (val) => {

    if(val == true) {
        return '☑️'
    } else {
       return "❌"
    }
};
//displays male or female icon depending on gender 

const checkGender = (val) => {
    if (val == "female") {
        return '♀'
    } else {
        return '⚦'
    }
}

const checkPronoun = (val) => {
    if(val == "female") {
        return 'she'
    } else {
        return "he"
    }
}

const checkPronounTwo = (val) => {
    if(val == "female") {
        return 'her'
    } else {
        return "his"
    }
}
//displays temperaments of selected animal 

const getAnimalTemperament = async () => {
    let profileContainer = document.querySelector("#profile-container")
    const animalId = await getAnimalId();
    const temperament = animalId.temperament;
    temperament.forEach(trait => {
        const list = document.createElement("li")
        list.textContent = trait
        profileContainer.appendChild(list)
    })

}

// getAnimalTemperament()
//dynamically inserts button to choose and open sumbission page once clicked
// const chooseButton =  () => {
//     let profileContainer = document.querySelector("#profile-container");
//     profileContainer.addEventListener("click", function (e){
//         if(e.target.classList.contains('choose-button')){
//             window.open("file:./success.html")
//         }else {
//             console.log("error")
//         }

//     })

//     const chooseButton = document.createElement("button");
//     chooseButton.textContent = "Choose pet"
//     chooseButton.classList.add('choose-button')
//     profileContainer.appendChild(chooseButton)
// }

// const similarAnimal = async () => {
//     const animalId = await getAnimalId();
//     const animalImg = document.createElement("img")
//     const animalName = document.createElement("h2")

// }
// const homeButton = (e) => {
//     console.log(e.target)
//     if(e.target.className == "fa-solid fa-house") {
//         window.open("file:./landing.html")
//     } 
// }
// const backButton = (e) => {
//     console.log(e.target)
//     if(e.target.className == "fa-solid fa-arrow-left"){
//         window.open("file:./response.html")
//     }
// }
function directToSocials(event) {
    //let classLists = event.target.classList;
    if (event.target.id === 'twitter-btn') {
      window.open('https://twitter.com/Battersea_');
    } else {
      window.open('https://www.instagram.com/battersea/?hl=en');
    }
  }

const homeButton = () => window.open("file:./landing.html" , "_self");
const backButton = () => window.open("file:./response.html", "_self" );

displayAnimalData()
displayMoreInfo()
const backHome = document.querySelector('.fa-house');
backHome.addEventListener("click", homeButton)
const previousPage = document.querySelector('.fa-arrow-left')
previousPage.addEventListener("click", backButton)

const twitter = document.querySelector('.fa-twitter');
const instagram = document.querySelector('.fa-instagram');
twitter.addEventListener('click', directToSocials);
instagram.addEventListener('click', directToSocials);



