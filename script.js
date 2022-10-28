const form = document.querySelector('form');
const submit = document.querySelector('button');
const matchError = document.querySelector('.passwords-dont-match');

/* code for validating inputs */
submit.addEventListener('click', () => {
  form.classList.add('submitted');
  /* check whether the passwords match */
  document.getElementById('password').value === document.getElementById('password-confirm').value ?
  matchError.style.opacity = 0 : matchError.style.opacity = 1;
})
