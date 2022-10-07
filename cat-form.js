let breedCount = { value: 0 };
let tempCount = { value: 0 };

// extract data from form and send to server
async function sendUserData(e) {
  e.preventDefault();
  await validation();
  //   console.log(validated);
  const data = {
    birthDate: e.target.birthDate.value,
    location: e.target.location.value,
    accommodation: e.target.accommodation.value,
    housemates: e.target.housemates.value,
    children: e.target.children.value,
    travel: e.target.travel.value,
    workHome: e.target.workHome.value,
    catExperience: e.target.catExperience.value,
    numberOfPets: e.target.numberOfPets.value,
    catAllergy: e.target.catAllergy.value,
    catMeds: e.target.catMeds.value,
    breed: filterCheckboxes(e.target.breed),
    houseCat: e.target.houseCat.value,
    temperament: filterCheckboxes(e.target.temperament),
  };

  if (
    breedCount.value > 0 &&
    breedCount.value < 3 &&
    tempCount.value > 0 &&
    tempCount.value < 3
  ) {
    sessionStorage.setItem("formData", JSON.stringify(data));
    window.location.href = `./response-cat.html`;
  } else {
    alert("Please select between 1 to 2 breeds and temperaments");
  }
}

function validation() {
  let breedBoxes = document.querySelectorAll(".breedCheck");
  let tempBoxes = document.querySelectorAll(".tempCheck");
  breedCount.value = 0;
  tempCount.value = 0;

  countCheckbox(breedBoxes, breedCount);
  countCheckbox(tempBoxes, tempCount);
}

function countCheckbox(checkboxes, count) {
  checkboxes.forEach((box) => {
    if (box.checked) {
      count.value += 1;
    }
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", sendUserData);

// header, footer buttons

function directToSocials(event) {
  console.log(event.target.className);
  //let classLists = event.target.classList;
  if (event.target.id === "twitter-btn") {
    window.open("https://twitter.com/Battersea_");
  } else {
    window.open("https://www.instagram.com/battersea/?hl=en");
  }
}

const twitter = document.querySelector(".fa-twitter");
const instagram = document.querySelector(".fa-instagram");
twitter.addEventListener("click", directToSocials);
instagram.addEventListener("click", directToSocials);

const homeButton = document.querySelector(".fa-arrow-left");
homeButton.addEventListener("click", () => {
  window.open("file:./landing.html", "_self");
});

const backButton = document.querySelector(".fa-house");
backButton.addEventListener("click", () => {
  window.open("file:./landing.html", "_self");
});
