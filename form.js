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

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  if (
    breedCount.value > 0 &&
    breedCount.value < 3 &&
    sizeCount.value > 0 &&
    sizeCount.value < 3 &&
    tempCount.value > 0 &&
    tempCount.value < 3
  ) {
    const response = await fetch("http://localhost:3000/dogs", options);

    if (response.status == 200) {
      console.log(response);
      window.location.href = "./response.html";
    }
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
