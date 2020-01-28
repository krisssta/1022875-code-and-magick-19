'use strict';
var setupElem = document.querySelector('div.hidden');
setupElem.classList.remove('hidden');

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
  var coatColorArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColorArray = ['black', 'red', 'blue', 'yellow', 'green'];
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