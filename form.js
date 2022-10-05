async function sendUserData(e) {
  e.preventDefault();

  const data = {
    // birthDate: e.target.birthDate.value,
    // location: e.target.location.value,
    // accommodation: e.target.accommodation.value,
    // housemates: e.target.housemates.value,
    // children: e.target.children.value,
    // travel: e.target.travel.value,
    // exercise: e.target.exercise.value,
    // walks: e.target.walks.value,
    // workHome: e.target.workHome.value,
    // dogExperience: e.target.dogExperience.value,
    // numberOfPets: e.target.numberOfPets.value,
    // dogAllergy: e.target.dogAllergy.value,
    // dogMeds: e.target.dogMeds.value,
    breed: e.target.breed.value,
    size: e.target.size.value,
    temperament: e.target.temperament.value,
  };

  // set the options for the fetch request
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };
  // make a fetch request sending the data
  const response = await fetch("http://localhost:3000/dogs");

  if (response.status == 200) {
    alert("data sent");
    window.location.href = "./response.html";
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", sendUserData);
