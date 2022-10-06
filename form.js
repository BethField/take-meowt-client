let breedCount = { value: 0 };
let sizeCount = { value: 0 };
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
    exercise: e.target.exercise.value,
    walks: e.target.walks.value,
    workHome: e.target.workHome.value,
    dogExperience: e.target.dogExperience.value,
    numberOfPets: e.target.numberOfPets.value,
    dogAllergy: e.target.dogAllergy.value,
    dogMeds: e.target.dogMeds.value,
    breed: filterCheckboxes(e.target.breed),
    size: filterCheckboxes(e.target.size),
    temperament: filterCheckboxes(e.target.temperament),
  };

  if (
    breedCount.value > 0 &&
    breedCount.value < 3 &&
    sizeCount.value > 0 &&
    sizeCount.value < 3 &&
    tempCount.value > 0 &&
    tempCount.value < 3
  ) {
    sessionStorage.setItem("formData", JSON.stringify(data));
    window.location.href = `./response.html`;
  } else {
    alert("Please");
  }
}

function validation() {
  let breedBoxes = document.querySelectorAll(".breedCheck");
  let sizeBoxes = document.querySelectorAll(".sizeCheck");
  let tempBoxes = document.querySelectorAll(".tempCheck");
  breedCount.value = 0;
  sizeCount.value = 0;
  tempCount.value = 0;

  countCheckbox(breedBoxes, breedCount);
  countCheckbox(sizeBoxes, sizeCount);
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
  window.open("file:./landing.html");
});

const backButton = document.querySelector(".fa-house");
backButton.addEventListener("click", () => {
  window.open("file:./landing.html");
});
