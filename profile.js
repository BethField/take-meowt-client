console.log("hello")

function getDogData () {

    const params = new URLSearchParams(window.location.search);
    const idx = params.get("id")
    console.log(idx) 
}

const dogIndex = getDogData()

const getDogId = async (dogIndex) => {

    const response = await fetch(`http://localhost:3000/dogs/${dogIndex}`);
    const id = await response.json();
    console.log(id)
  }
  
  getDogId()
  