function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

function generatePoem(event) {
  event.preventDefault();
  //alert("Generating poem");

  let instructionsInput = document.querySelector("#instructions-input");

  let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are romantic poem expert and love to write short poems.Your mission is to generate 4 line poem and separate each line with a <br />. Make sure to follow user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Just a moment... generating a poem for you about ${instructionsInput.value}.`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
