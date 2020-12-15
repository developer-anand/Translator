var inputText = document.querySelector("#txt-input");
var translatebtn = document.querySelector("#btn-translate");
var outputTxt = document.querySelector("#output");

//for writing value
//outputTxt.innerHTML = "anand";

//for writing value
//.value
function clickHandler() {
  outputTxt.innerText = "kkdjjdhhhs " + inputText.value;
  console.log("output", inputText.value);
}

translatebtn.addEventListener("click", clickHandler);
