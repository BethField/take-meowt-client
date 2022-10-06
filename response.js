console.log('Hello from scripts!');

let dogArray = [
  {
    name: 'Buddy',
    age: '6 months',
    breed: 'Golden Retriever',
    gender: 'Male',
    image: './images/buddy.jpeg',
  },
  {
    name: 'Fluffy',
    age: '2 years',
    breed: 'Springer spaniel',
    gender: 'Female',
    image: './images/buddy.jpeg',
  },
  {
    name: 'Ralph',
    age: '18 years',
    breed: 'Golden Retriever',
    gender: 'Female',
    image: './images/buddy.jpeg',
  },
  {
    name: 'Whiskey',
    age: '6 years',
    breed: 'Yorkshire Terrier',
    gender: 'Male',
    image: './images/buddy.jpeg',
  },
  {
    name: 'Hamish',
    age: '7 years',
    breed: 'Scottish Terrier',
    gender: 'Male',
    image: './images/buddy.jpeg',
  },
  {
    name: 'Wilson',
    age: '2 years',
    breed: 'cockerpoo',
    gender: 'Male',
    image: './images/buddy.jpeg',
  },
  {
    name: 'Sebby',
    age: '4 years',
    breed: 'Border Collie',
    gender: 'Male',
    image: './images/buddy.jpeg',
  },
  {
    name: 'Alice',
    age: '6 months',
    breed: 'Whippet',
    gender: 'Female',
    image: './images/buddy.jpeg',
  },
];

async function getDogs() {
  const response = await fetch('http://localhost:3000/dogs');
  const data = await response.json();
  return data;
}

async function displayAnimal() {
  const arr = await getDogs();
  let responseContainer = document.getElementById('response-container');
  let data = ``;
  for (let i = 0; i < arr.length; i++) {
    data += `<div class="animal-card">
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
          </div>`;
  }
  responseContainer.innerHTML = data;
}

function directToSocials(event) {
  //let classLists = event.target.classList;
  if (event.target.id === 'twitter-btn') {
    window.open('https://twitter.com/Battersea_');
  } else {
    window.open('https://www.instagram.com/battersea/?hl=en');
  }
}

// displayAnimal();
// getDogs();

const data = sessionStorage.getItem("formData")

console.log(JSON.parse(data))

const twitter = document.querySelector('.fa-twitter');
const instagram = document.querySelector('.fa-instagram');
twitter.addEventListener('click', directToSocials);
instagram.addEventListener('click', directToSocials);
