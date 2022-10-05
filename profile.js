//grab id from url 
function getAnimalData () {

    const params = new URLSearchParams(window.location.search);
    const idx = params.get("id")
    return(idx) 
}

const dogIndex = getAnimalData()
console.log(dogIndex)

//get data object from server and convert it to json 
const getAnimalId = async () => {
    try {
    const index = dogIndex

    const response = await fetch(`http://localhost:3000/dogs/${index}`);
    console.log(response)
    const id = await response.json();
    return(id)
    } catch (e) {
        console.log({error: e})
    }
  }
  
  getAnimalId()
  
  // display dog description by id 

const displayAnimalData = async () => {
    const animalId = await getAnimalId();
    console.log(animalId.name)
    animalDescription()
    


}

const animalDescription = async () => {
    try{
    const animalId = await getAnimalId();
    let profileContainer = document.querySelector("#profile-container")
    const animalImg = document.createElement("img")
    const element = document.createElement("h2")
    const animalDescription = document.createElement("p")
    const animalGender = document.createElement("i")
    const animalAge = document.createElement("p")
    animalImg.src = "./images/beagle.png" 
    animalGender.className = "fa-solid fa-venus"
    element.textContent = animalId.name 
    animalDescription.textContent = "Gorgeous Lulu is an incredibly sweet girl. While she hasn't had the best start in life and can be a little wary of people when she first meets them, this hasn't dented her enthusiasm or her ability to quickly make friends. She is super intelligent and a keen explorer who wants to investigate every sniff, sound and sight she encounters. Lulu is looking for a dedicated owner who will continue her training and provide her with all the physical and mental stimulation she requires. She forms strong bonds, will make a loyal companion and return your affection tenfold."
    animalAge.innerHTML = animalId.age
    profileContainer.appendChild(animalImg) 
    profileContainer.appendChild(element)
    profileContainer.appendChild(animalAge)
    profileContainer.appendChild(animalDescription)

    } catch (e) {
        console.log({error: e})
    }
     
 

}

const similarAnimal = async () => {
    const animalId = await getAnimalId();

}
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

displayAnimalData()
const backHome = document.querySelector('.fa-house');
backHome.addEventListener("click", homeButton)
const previousPage = document.querySelector('.fa-arrow-left')
previousPage.addEventListener("click", backButton)
