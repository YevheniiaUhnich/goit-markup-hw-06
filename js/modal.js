var buttonStyle = document.querySelector('.button-style');
  var modalBackdrop = document.querySelector('.modal-backdrop');
  var Close = document.querySelector('.close');
  buttonStyle.addEventListener('click', function () {
    modalBackdrop.classList.remove('is-hidden');
  });
  close.addEventListener('click', function () {
    modalBackdrop.classList.add('is-hidden');
  });