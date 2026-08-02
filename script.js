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