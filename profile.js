console.log("hello")

function getDogData () {

    const params = new URLSearchParams(window.location.search);
    const idx = params.get("id")
    return(idx) 
}

const dogIndex = getDogData()
console.log(dogIndex)

const getDogId = async () => {
    const index = dogIndex

    const response = await fetch(`http://localhost:3000/dogs/${index}`);
    console.log(response)
    const id = await response.json();
    console.log(id)
  }
  
  getDogId()
  