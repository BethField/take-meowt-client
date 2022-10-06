async function sendUserData(e) {
  e.preventDefault();

  const data = {
    test: 2,
    testing: 3
  };

  sessionStorage.setItem("formData", JSON.stringify(data));

  window.location.href = "./response.html";
}

const form = document.querySelector("form");
form.addEventListener("submit", sendUserData);
