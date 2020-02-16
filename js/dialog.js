'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var openPopup = function () {
    setup.style.top = '';
    setup.style.left = '';
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
    window.util.isEnterEvent(evt, openPopup);
  });

  document.addEventListener('keydown', function (evt) {
    var inputNameElement = document.querySelector('.setup-user-name');
    if (inputNameElement !== document.activeElement) {
      window.util.isEscEvent(evt, closePopup);
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

})();
