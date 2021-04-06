var weatherInput = document.querySelector("#weather-input");

var btn = document.querySelector("#btn");

var output = document.querySelector("#output");

var url = "http://api.openweathermap.org/data/2.5/weather?";

function constructUrl(item) {
  return (
    url + "q=" + item + "&units=metric&appid=4a190a741faff24df0052684c3bb96c1"
  );
}

function onClickHandler() {
  var userInput = weatherInput.value;
  fetch(constructUrl(userInput))
    .then((response) => response.json())
    .then((json) => {
      output.innerText = json.main.temp + " °C";
    });
}

btn.addEventListener("click", onClickHandler);
