var txtInput = document.querySelector("#txt-input");
var translatebtn = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output");

//for writing value
//outputTxt.innerHTML = "anand";

//for writing value
//.value

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverUrl + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      txtOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

translatebtn.addEventListener("click", clickHandler);
