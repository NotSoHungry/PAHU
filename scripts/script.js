let formCheckboxes = document.querySelector('.form-checkboxes'),
    formSubmit = document.querySelector('.input-email-wrapper'),
    submitButtonMobile = document.querySelector('.input-submit.mobile');

formSubmit.addEventListener('click', () => {
    formCheckboxes.classList.toggle('form-active');
    formSubmit.classList.toggle('form-active');
    submitButtonMobile.classList.toggle('form-active');
});