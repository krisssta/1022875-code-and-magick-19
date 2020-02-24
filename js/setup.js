'use strict';
(function () {
  var coatColorsArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColorsArray = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColorsArray = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  // function generateArrayObject() {
  //   var myObjectsArray = [];
  //   for (var i = 1; i <= 4; i++) {
  //     var obj = generateObject(i);
  //     myObjectsArray.push(obj);
  //   }
  //   return myObjectsArray;
  // }

  function generateRandomCount(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  // function generateObject() {
  //   var firstNames = ['Иван', 'Хуан Себатьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  //   var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  //   var randFirstName = generateRandomCount(0, firstNames.length - 1);
  //   var randSecondName = generateRandomCount(0, secondNames.length - 1);
  //   var randCoatColor = generateRandomCount(0, coatColorsArray.length - 1);
  //   var randEyesColor = generateRandomCount(0, eyesColorsArray.length - 1);


  //   return {
  //     'name': firstNames[randFirstName] + ' ' + secondNames[randSecondName],
  //     'coatColor': coatColorsArray[randCoatColor],
  //     'eyesColor': eyesColorsArray[randEyesColor]
  //   };
  // }

  var setupSimilarList = document.querySelector('.setup-similar-list');
  var setupSimilarItem = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


  var setup = document.querySelector('.setup');

  var renderWizard = function (wizard) {
    var objectElement = setupSimilarItem.cloneNode(true);
    objectElement.querySelector('.setup-similar-label').textContent = (wizard.name);
    objectElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    objectElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return objectElement;
  };


  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    setupSimilarList.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler); // выгрузка с сервера похожих магов


  var successHandlerSave = function () {
    setup.classList.add('hidden');
  };

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
  //   window.save(new FormData(form), function (response) {
  //     setup.classList.add('hidden');
  //   });
  //   evt.preventDefault();
  // });
    window.save(new FormData(form), successHandlerSave, errorHandler);
    evt.preventDefault();
  });

  var wizardCoat = document.querySelector('.wizard-coat');
  var inputCoat = document.querySelector('input[name="coat-color"]');
  var coatClickHandler = function () {
    wizardCoat.setAttribute('style', 'fill:' + coatColorsArray[(generateRandomCount(0, coatColorsArray.length - 1))]);
    inputCoat.setAttribute('value', wizardCoat.style.fill);

  };
  wizardCoat.addEventListener('click', coatClickHandler);


  var wizardEyes = document.querySelector('.wizard-eyes');
  var inputEyes = document.querySelector('input[name="eyes-color"]');
  var eyesClickHandler = function () {
    wizardEyes.setAttribute('style', 'fill:' + eyesColorsArray[(generateRandomCount(0, eyesColorsArray.length - 1))]);
    inputEyes.setAttribute('value', wizardEyes.style.fill);

  };
  wizardEyes.addEventListener('click', eyesClickHandler);


  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputFireball = document.querySelector('input[name="fireball-color"]');
  var fireballClickHandler = function () {
    var colorFireball = fireballColorsArray[(generateRandomCount(0, fireballColorsArray.length - 1))];
    wizardFireball.setAttribute('style', 'background:' + colorFireball);
    inputFireball.setAttribute('value', colorFireball);

  };
  wizardFireball.addEventListener('click', fireballClickHandler);

})();
