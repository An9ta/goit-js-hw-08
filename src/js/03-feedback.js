import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const formDataString = localStorage.getItem('feedback-form-state');
if (formDataString) {
  const formData = JSON.parse(formDataString);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
  storedData();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(data);
  localStorage.clear();
  form.reset();
});

const storedData = throttle(() => {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);
