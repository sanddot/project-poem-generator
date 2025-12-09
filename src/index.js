function generatePoem(event) {
  event.preventDefault();
  //alert("Generating poem");

  new Typewriter("#poem", {
    strings: "This is the poem",
    autoStart: true,
    cursor: "",
    delay: 25,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
