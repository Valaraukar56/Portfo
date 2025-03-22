const responses1 = document.querySelector("#responses1");
const responses2 = document.querySelector("#responses2");
const responses3 = document.querySelector("#responses3");
const responses4 = document.querySelector("#responses4");
const responses5 = document.querySelector("#responses5");
const responses6 = document.querySelector("#responses6");
const responses7 = document.querySelector("#responses7");
const responses8 = document.querySelector("#responses8");
const responses9 = document.querySelector("#responses9");

const showResponses1 = document.querySelector("#show-responses1");
const showResponses2 = document.querySelector("#show-responses2");
const showResponses3 = document.querySelector("#show-responses3");
const showResponses4 = document.querySelector("#show-responses4");
const showResponses5 = document.querySelector("#show-responses5");
const showResponses6 = document.querySelector("#show-responses6");
const showResponses7 = document.querySelector("#show-responses7");
const showResponses8 = document.querySelector("#show-responses8");
const showResponses9 = document.querySelector("#show-responses9");

const goodAnswers = document.querySelectorAll(".good");
const badAnswers = document.querySelectorAll(".bad");

for (let i = 0; i < goodAnswers.length; i++) {
	goodAnswers[i].addEventListener("click", (ev) => {
		ev.target.style.backgroundColor = "green";
	});
}

for (let i = 0; i < badAnswers.length; i++) {
	badAnswers[i].addEventListener("click", (ev) => {
		ev.target.style.backgroundColor = "red";
	});
}

showResponses1.addEventListener("click", () => {
	responses1.style.visibility = "visible";
});

showResponses2.addEventListener("click", () => {
	responses2.style.visibility = "visible";
});

showResponses3.addEventListener("click", () => {
	responses3.style.visibility = "visible";
});

showResponses4.addEventListener("click", () => {
	responses4.style.visibility = "visible";
});

showResponses5.addEventListener("click", () => {
	responses5.style.visibility = "visible";
});

showResponses6.addEventListener("click", () => {
	responses6.style.visibility = "visible";
});

showResponses7.addEventListener("click", () => {
	responses7.style.visibility = "visible";
});

showResponses8.addEventListener("click", () => {
	responses8.style.visibility = "visible";
});

showResponses9.addEventListener("click", () => {
	responses9.style.visibility = "visible";
});
