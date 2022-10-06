// extract data from form and send to server
async function sendUserData(e) {
  await validation();
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

  const response = await fetch("http://localhost:3000/dogs", options);

  if (response.status == 200) {
    console.log(response);
    window.location.href = "./response.html";
  }
}

// return true if 1 or 2 checkboxes are checked
function validateCheckboxes(checkboxes) {
  let validated = false;
  // get array from the checkboes and filter the checked ones
  let checkboxArray = Array.from(checkboxes);
  let checked = checkboxArray.filter((checkbox) => checkbox.checked === true);
  // if length of checked array is 1 or 2, validated === true
  if (checked.length === 1 || checked.length === 2) {
    console.log(checked.length);
    validated === true;
  } else {
    alert("Please select the correct number of checkboxes");
  }
  console.log(validated);
  return validated;
}

// validate function called on submit.
// gets checkboxes by class and calls validateCheckboxes() on each group
function validation() {
  let breedBoxes = document.querySelectorAll(".breedCheck");
  let sizeBoxes = document.querySelectorAll(".sizeCheck");
  let tempBoxes = document.querySelectorAll(".tempCheck");

  validateCheckboxes(breedBoxes);
  validateCheckboxes(sizeBoxes);
  validateCheckboxes(tempBoxes);
}

const form = document.querySelector("form");
form.addEventListener("submit", sendUserData);
