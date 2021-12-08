'use strict';

const frames = document.querySelectorAll('.frame__frame');
const frameButtons = document.querySelectorAll('.frame__button');
const frameInputs = document.querySelectorAll('input[type="text"]');
const loger = [];

let counter = 0;

frameButtons.forEach((button) => {
  button.addEventListener('click', nextFrame);
});
frameInputs.forEach(input => input.addEventListener('change', nextFrame));

function nextFrame() {
  frames.forEach((frame) => {
    frame.classList.remove('frame__active');
  });
  counter++;
  if (counter >= frames.length) return done();
  frames[counter].classList.add('frame__active');
  document.querySelector('.frame__active > input').focus();
}

function done() {
  frameInputs.forEach((input, idx) => {
    loger.push({ v: input.value, id: idx });
  });
  console.log(loger);
  document.write(JSON.stringify(loger));
}
