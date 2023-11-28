const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const topic = urlParams.get("topic");

document.querySelector("h1").innerHTML = topic;