function generatePoem(event) {
  event.preventDefault();
  //alert("Generating poem");

  let poemAIText = document.querySelector("#poem");
  poemAIText.innerHTML = "This is the poem!";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
