"use strict";

const modal1 = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const igor1 = document.querySelector(".igor1");
const close = document.querySelector(".close-modal");
const hiddenigor = document.querySelector(".hiddenigor");
const modal2 = document.querySelector(".modal2");
const overlay1 = document.querySelector(".overlay1");
const hidden2 = document.querySelector(".hidden2");
const flower = document.querySelector(".flower");
const close1 = document.querySelector(".close-modal1");
const overlay3 = document.querySelector(".overlay3");
const hidden3 = document.querySelector(".hidden3");
const wolf = document.querySelector(".wolf");
const close3 = document.querySelector(".close-modal3");
const modal3 = document.querySelector(".modal3");

igor1.addEventListener("click", function () {
	modal1.classList.remove("hidden");
	hiddenigor.classList.add("modal-animation");
	overlay.classList.remove("hidden");
});

close.addEventListener("click", function () {
	modal1.classList.add("hidden");
	overlay.classList.add("hidden");
});

flower.addEventListener("click", function () {
	modal2.classList.remove("hidden");
	hidden2.classList.add("modal-animation");
	overlay1.classList.remove("hidden");
});

close3.addEventListener("click", function () {
	modal3.classList.add("hidden");
	overlay3.classList.add("hidden");
});

wolf.addEventListener("click", function () {
	modal3.classList.remove("hidden");
	hidden3.classList.add("modal-animation");
	overlay3.classList.remove("hidden");
});

close1.addEventListener("click", function () {
	modal2.classList.add("hidden");
	overlay1.classList.add("hidden");
});
