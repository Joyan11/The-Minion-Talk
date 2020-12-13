let inputArea = document.querySelector("#input");
let button = document.querySelector("#button");
let outputArea = document.querySelector("#output");

async function translate() {
  let userInput = inputArea.value;
  // console.log(userInput);
  let url = "https://api.funtranslations.com/translate/minion.json";
  try {
    let data = await fetch(`${url}?text= ${userInput}`);
    let result = await data.json();
    console.log(result);
    outputArea.innerHTML = result.contents.translated;
  } catch (err) {
    console.log(err);
    alert("Error");
  }
}

button.addEventListener("click", function () {
  // translate(inputArea.value);
  translate();
});
