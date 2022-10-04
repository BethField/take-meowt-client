async function sendUserData(e) {
  e.preventDefault();
  // extract the data into an object
  const data = {
    birthDate: e.target.birth - date.value,
    location: e.target.location.value,
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

  if (response.status == 201) {
    alert("data sent");
    window.location.reload();
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", sendUserData);
