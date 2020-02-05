'use strict';

var coatColorArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArray = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColorArray = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
// var randFireballColor = generateRandomCount(0, fireballColorArray.length - 1);
var KEY_ENTER = 'Enter';
var KEY_ESCAPE = 'Escape';


function generateArrayObject() {
  var myObjectArray = [];
  for (var i = 1; i <= 4; i++) {
    var obj = generateObject(i);
    myObjectArray.push(obj);
  }
  return myObjectArray;
}

function generateRandomCount(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function generateObject() {
  var firstName = ['Иван', 'Хуан Себатьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var randFirstName = generateRandomCount(0, firstName.length - 1);
  var randSecondName = generateRandomCount(0, secondName.length - 1);
  var randCoatColor = generateRandomCount(0, coatColorArray.length - 1);
  var randEyesColor = generateRandomCount(0, eyesColorArray.length - 1);


  return {
    'name': firstName[randFirstName] + ' ' + secondName[randSecondName],
    'coatColor': coatColorArray[randCoatColor],
    'eyesColor': eyesColorArray[randEyesColor]
  };
}

var wizards = generateArrayObject();

var setupSimilarList = document.querySelector('.setup-similar-list');
var setupSimilarItem = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  var objectElement = setupSimilarItem.cloneNode(true);
  objectElement.querySelector('.setup-similar-label').textContent = (wizards[i].name);
  objectElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  objectElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  fragment.appendChild(objectElement);

}

setupSimilarList.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var openPopup = function () {
  setup.classList.remove('hidden');

};

var closePopup = function () {
  setup.classList.add('hidden');

};

var buttonOpenClickHandler = function () {
  openPopup();

};

setupOpen.addEventListener('click', buttonOpenClickHandler);

var buttonCloseClickHandler = function () {
  closePopup();

};

setupClose.addEventListener('click', buttonCloseClickHandler);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === KEY_ENTER) {
    openPopup();

  }
});

document.addEventListener('keydown', function (evt) {
  var inputNameElement = document.querySelector('.setup-user-name');
  if (evt.key === KEY_ESCAPE && inputNameElement !== document.activeElement) {
    closePopup();

  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === KEY_ENTER) {
    closePopup();

  }
});

// var randCoatColor = generateRandomCount(0, coatColorArray.length - 1);
// var randEyesColor = generateRandomCount(0, eyesColorArray.length - 1);

var wizardCoat = document.querySelector('.wizard-coat');
var inputCoat = document.querySelector('input[name="coat-color"]');
var coatClickHandler = function () {
  wizardCoat.setAttribute('style', 'fill:' + coatColorArray[(generateRandomCount(0, coatColorArray.length - 1))]);
  inputCoat.setAttribute('value', wizardCoat.style.fill);

};
wizardCoat.addEventListener('click', coatClickHandler);


var wizardEyes = document.querySelector('.wizard-eyes');
var inputEyes = document.querySelector('input[name="eyes-color"]');
var eyesClickHandler = function () {
  wizardEyes.setAttribute('style', 'fill:' + eyesColorArray[(generateRandomCount(0, eyesColorArray.length - 1))]);
  inputEyes.setAttribute('value', wizardEyes.style.fill);

};
wizardEyes.addEventListener('click', eyesClickHandler);


var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputFireball = document.querySelector('input[name="fireball-color"]');
var fireballClickHandler = function () {
  wizardFireball.setAttribute('style', 'background:' + fireballColorArray[(generateRandomCount(0, fireballColorArray.length - 1))]);
  inputFireball.setAttribute('value', wizardFireball.style.background);

};
wizardFireball.addEventListener('click', fireballClickHandler);
