// PARTICIPANTS' SPEED
const ON_FOOT = 3.6; 
const BIKE = 20.1; 
const CAR = 80; 
const PLANE = 800; 

// CALL FORM ELEMENTS FROM HTML
let elForm = document.querySelector('.js-page-form');
let elInput = elForm.querySelector('.js-masofa-input');

// CALL OUTPUT ELEMENTS FROM HTML
let elPiyoda = document.querySelector('.js-piyoda');
let elPiyodaMin = document.querySelector('.js-piyodamin');

let elBike = document.querySelector('.js-velo');
let elBikeMin = document.querySelector('.js-velomin');

let elCar = document.querySelector('.js-moshin');
let elCarMin = document.querySelector('.js-moshinmin');

let elPlane = document.querySelector('.js-uchoq');
let elPlaneMin = document.querySelector('.js-uchoqmin');

// FUNCTION
elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let numberInput = parseFloat(elInput.value.trim(), 10);

  if (numberInput < 0) {
    alert('0 dan takka kiriting')
    return
  }

  // COUNT ON FOOT SPEED
  let footSpeedHour = (numberInput / ON_FOOT).toFixed(2);
  let footHour = footSpeedHour - Math.floor(footSpeedHour);
  let footMinute = (60 * footHour) % 100;
  elPiyoda.textContent =  Math.floor(footSpeedHour);
  elPiyodaMin.textContent =  Math.floor(footMinute);

  // COUNT BIKE SPEED
  let bikeSpeedHour = (numberInput / BIKE).toFixed(2);
  let bikeHour = bikeSpeedHour - Math.floor(bikeSpeedHour);
  let bikeMinute = (60 * bikeHour) % 100;
  elBike.textContent =  Math.floor(bikeSpeedHour);
  elBikeMin.textContent =  Math.floor(bikeMinute);

  // COUNT CAR SPEED
  let carSpeedHour = (numberInput / CAR).toFixed(2);
  let carHour = carSpeedHour - Math.floor(carSpeedHour);
  let carMinute = (60 * carHour) % 100;
  elCar.textContent =  Math.floor(carSpeedHour);
  elCarMin.textContent =  Math.floor(carMinute);

  // COUNT PLANE SPEED
  let planeSpeedHour = (numberInput / PLANE).toFixed(2);
  let planeHour = planeSpeedHour - Math.floor(planeSpeedHour);
  let planeMinute = (60 * planeHour) % 100;
  elPlane.textContent =  Math.floor(planeSpeedHour);
  elPlaneMin.textContent =  Math.floor(planeMinute);
})