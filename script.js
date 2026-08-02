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