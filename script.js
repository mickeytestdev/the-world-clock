// ========================================
// LOCAL CLOCK ENGINE
// ========================================
function updateLocalClock() {
  let localTimeZone = moment.tz.guess();

  let cityName = localTimeZone.split("/")[1];
  cityName = cityName.replaceAll("_", " ");

  let localDate = moment()
    .tz(localTimeZone)
    .format("dddd, MMMM D, YYYY");

  let localTime = moment()
    .tz(localTimeZone)
    .format("h:mm:ss A");

  let localCityElement = document.querySelector("#local-city");
  let localDateElement = document.querySelector("#local-date");
  let localTimeElement = document.querySelector("#local-time");

  localCityElement.innerHTML = `📍 ${cityName}`;
  localDateElement.innerHTML = localDate;
  localTimeElement.innerHTML = localTime;
}

updateLocalClock();

setInterval(updateLocalClock, 1000);
// ========================================
// OXNARD CLOCK ENGINE
// ========================================
function updateOxnardClock() {
  let oxnardTimeZone = "America/Los_Angeles";

  let oxnardDate = moment()
    .tz(oxnardTimeZone)
    .format("dddd, MMMM D, YYYY");

  let oxnardTime = moment()
    .tz(oxnardTimeZone)
    .format("h:mm:ss A");

  let oxnardDateElement = document.querySelector("#oxnard-date");
  let oxnardTimeElement = document.querySelector("#oxnard-time");

  oxnardDateElement.innerHTML = oxnardDate;
  oxnardTimeElement.innerHTML = oxnardTime;
}

updateOxnardClock();

setInterval(updateOxnardClock, 1000);
// ========================================
// DARKHAN CLOCK ENGINE
// ========================================
function updateDarkhanClock() {
  let darkhanTimeZone = "Asia/Ulaanbaatar";

  let darkhanDate = moment()
    .tz(darkhanTimeZone)
    .format("dddd, MMMM D, YYYY");

  let darkhanTime = moment()
    .tz(darkhanTimeZone)
    .format("h:mm:ss A");

  let darkhanDateElement =
    document.querySelector("#darkhan-date");

  let darkhanTimeElement =
    document.querySelector("#darkhan-time");

  darkhanDateElement.innerHTML = darkhanDate;
  darkhanTimeElement.innerHTML = darkhanTime;
}

updateDarkhanClock();

setInterval(updateDarkhanClock, 1000);
// ========================================
// ADELAIDE CLOCK ENGINE
// ========================================
function updateAdelaideClock() {
  let adelaideTimeZone = "Australia/Adelaide";

  let adelaideDate = moment()
    .tz(adelaideTimeZone)
    .format("dddd, MMMM D, YYYY");

  let adelaideTime = moment()
    .tz(adelaideTimeZone)
    .format("h:mm:ss A");

  let adelaideDateElement =
    document.querySelector("#adelaide-date");

  let adelaideTimeElement =
    document.querySelector("#adelaide-time");

  adelaideDateElement.innerHTML = adelaideDate;
  adelaideTimeElement.innerHTML = adelaideTime;
}

updateAdelaideClock();

setInterval(updateAdelaideClock, 1000);
// ========================================
// ZANZIBAR CLOCK ENGINE
// ========================================
function updateZanzibarClock() {
  let zanzibarTimeZone = "Africa/Dar_es_Salaam";

  let zanzibarDate = moment()
    .tz(zanzibarTimeZone)
    .format("dddd, MMMM D, YYYY");

  let zanzibarTime = moment()
    .tz(zanzibarTimeZone)
    .format("h:mm:ss A");

  let zanzibarDateElement =
    document.querySelector("#zanzibar-date");

  let zanzibarTimeElement =
    document.querySelector("#zanzibar-time");

  zanzibarDateElement.innerHTML = zanzibarDate;
  zanzibarTimeElement.innerHTML = zanzibarTime;
}

updateZanzibarClock();

setInterval(updateZanzibarClock, 1000);
// ========================================
// TRAVEL VIEW CONTROLS
// ========================================
let travelClockInterval;
let citySelect = document.querySelector("#city-select");
let defaultClocks = document.querySelector("#default-clocks");
let travelClock = document.querySelector("#travel-clock");
let returnButton = document.querySelector("#return-button");

let customLocation = document.querySelector("#custom-location");
let customCityInput = document.querySelector("#custom-city");
let customCityButton = document.querySelector("#custom-city-button");

function updateTravelClock(timeZone, cityName) {
  let travelDate = moment()
    .tz(timeZone)
    .format("dddd, MMMM D, YYYY");

  let travelTime = moment()
    .tz(timeZone)
    .format("h:mm:ss A");

  let travelCityElement =
    document.querySelector("#travel-city");

  let travelDateElement =
    document.querySelector("#travel-date");

  let travelTimeElement =
    document.querySelector("#travel-time");

  travelCityElement.innerHTML = cityName;
  travelDateElement.innerHTML = travelDate;
  travelTimeElement.innerHTML = travelTime;
}

function showTravelView(event) {
  let selectedTimeZone = event.target.value;

  if (selectedTimeZone === "") {
    customLocation.classList.remove("visible");
    showDefaultClocks();
    return;
  }

  if (selectedTimeZone === "custom") {
    customLocation.classList.add("visible");
    customCityInput.focus();
    return;
  }

  customLocation.classList.remove("visible");

  let selectedCityName =
    event.target.options[event.target.selectedIndex].text;

  defaultClocks.hidden = true;
  travelClock.hidden = false;

  clearInterval(travelClockInterval);

  updateTravelClock(
    selectedTimeZone,
    selectedCityName,
  );

  travelClockInterval = setInterval(
    function () {
      updateTravelClock(
        selectedTimeZone,
        selectedCityName,
      );
    },
    1000,
  );
}

function showDefaultClocks() {
  clearInterval(travelClockInterval);

  travelClock.hidden = true;
  defaultClocks.hidden = false;

  customLocation.classList.remove("visible");
  customCityInput.value = "";
  citySelect.value = "";
}

function displayCustomLocation(response) {
  let locationResults = response.data.results;

  if (!locationResults || locationResults.length === 0) {
    alert(
      "Sorry, we could not find that location. Please check the spelling and try again.",
    );

    return;
  }

  let confirmedLocation = locationResults[0];

  let confirmedCity = confirmedLocation.name;
  let confirmedCountry = confirmedLocation.country;
  let confirmedTimeZone = confirmedLocation.timezone;

  let confirmedCityName =
    `🌟 ${confirmedCity}, ${confirmedCountry}`;

  customLocation.classList.remove("visible");
  defaultClocks.hidden = true;
  travelClock.hidden = false;

  clearInterval(travelClockInterval);

  updateTravelClock(
    confirmedTimeZone,
    confirmedCityName,
  );

  travelClockInterval = setInterval(
    function () {
      updateTravelClock(
        confirmedTimeZone,
        confirmedCityName,
      );
    },
    1000,
  );
}

function handleCustomLocationError(error) {
  console.error("Custom location search failed:", error);

  alert(
    "Sorry, we could not complete the location search. Please try again.",
  );
}

function handleCustomLocation() {
  let customCityName = customCityInput.value.trim();

  if (customCityName === "") {
    alert("Please enter a city or place.");
    return;
  }

  clearInterval(travelClockInterval);

let apiUrl =
  `https://geocoding-api.open-meteo.com/v1/search` +
  `?name=${encodeURIComponent(customCityName)}` +
  `&count=1` +
  `&language=en` +
  `&format=json`;

  axios
    .get(apiUrl)
    .then(displayCustomLocation)
    .catch(handleCustomLocationError);
}

// ========================================
// THEME ENGINE
// ========================================
let defaultThemeButton =
  document.querySelector("#default-theme");

let cyberpunkThemeButton =
  document.querySelector("#cyberpunk-theme");

let sunsetThemeButton =
  document.querySelector("#sunset-theme");

function updateActiveThemeButton(activeButton) {
  defaultThemeButton.classList.remove("active-theme");
  cyberpunkThemeButton.classList.remove("active-theme");
  sunsetThemeButton.classList.remove("active-theme");

  activeButton.classList.add("active-theme");
}

function applyDefaultTheme() {
  document.body.classList.remove(
    "cyberpunk-theme",
    "sunset-theme",
  );

  updateActiveThemeButton(defaultThemeButton);

  localStorage.setItem("worldClockTheme", "default");
}

function applyCyberpunkTheme() {
  document.body.classList.remove("sunset-theme");
  document.body.classList.add("cyberpunk-theme");

  updateActiveThemeButton(cyberpunkThemeButton);

  localStorage.setItem(
    "worldClockTheme",
    "cyberpunk",
  );
}

function applySunsetTheme() {
  document.body.classList.remove("cyberpunk-theme");
  document.body.classList.add("sunset-theme");

  updateActiveThemeButton(sunsetThemeButton);

  localStorage.setItem(
    "worldClockTheme",
    "sunset",
  );
}

function loadSavedTheme() {
  let savedTheme =
    localStorage.getItem("worldClockTheme");

  if (savedTheme === "cyberpunk") {
    applyCyberpunkTheme();
    return;
  }

  if (savedTheme === "sunset") {
    applySunsetTheme();
    return;
  }

  applyDefaultTheme();
}
// ========================================
// EVENT LISTENERS
// ========================================
citySelect.addEventListener("change", showTravelView);
returnButton.addEventListener("click", showDefaultClocks);

customCityButton.addEventListener(
  "click",
  handleCustomLocation,
);

defaultThemeButton.addEventListener(
  "click",
  applyDefaultTheme,
);

cyberpunkThemeButton.addEventListener(
  "click",
  applyCyberpunkTheme,
);

sunsetThemeButton.addEventListener(
  "click",
  applySunsetTheme,
);

loadSavedTheme();
