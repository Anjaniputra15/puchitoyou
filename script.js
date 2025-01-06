const { JSDOM } = require("jsdom");
const { window } = new JSDOM(`<!DOCTYPE html><html><body><div id="move-random"></div></body></html>`);
const document = window.document;

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
