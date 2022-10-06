console.log('Hello from scripts!');

sessionInfo = sessionStorage.getItem("formData");
// Doesn't display correctly when client is running on a live server
console.log(JSON.parse(sessionInfo));




async function getDogs() {
  const sessionInfo = sessionStorage.getItem("formData");
  const request = JSON.parse(sessionInfo);

  const options = {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       accept: "application/json",
     },
     body: JSON.stringify(request),
   };
  
   const response = await fetch("http://localhost:3000/dogs", options);

  const data = await response.json();
  return data;
 }

async function displayAnimal() {
  const arr = await getDogs();
  let responseContainer = document.getElementById('response-container');
  let data = ``;
  for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]['id'])
    data += `<div class="animal-card">
                <a href= "profile.html?id=${arr[i]['id']}">
              <div class="animal-img">
                <img src="./images/buddy.jpeg" alt="image of displayed dog or cat." />
              </div>
              <div class="animal-info">
                <h1 class="animal-name">${arr[i]['name']}</h1>
                <div class="animal-breakdown">
                  <p class="animal-gender">${arr[i]['gender']}</p>
                  <p class="animal-age">${arr[i]['age']} years old</p>
                  <p class="animal-breed">${arr[i]['breed']}</p>
                </div>
              </div>
              </a>
            </div>`;
          // link.href = `profile.html?=id${arr[i]['id']}`
  }
  responseContainer.innerHTML = data;
  // responseContainer.appendChild(link)
  // responseContainer.addEventListener('click', chosenPet)

}

// function chosenPet (e) {
//  console.log(e)
// }
// chosenPet()
function directToSocials(event) {
  //let classLists = event.target.classList;
  if (event.target.id === 'twitter-btn') {
    window.open('https://twitter.com/Battersea_');
  } else {
    window.open('https://www.instagram.com/battersea/?hl=en');
  }
}

displayAnimal();
//getDogs();

const twitter = document.querySelector('.fa-twitter');
const instagram = document.querySelector('.fa-instagram');
twitter.addEventListener('click', directToSocials);
instagram.addEventListener('click', directToSocials);




