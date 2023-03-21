const form = document.querySelector('form');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const length = document.querySelector('#length').value;
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset[Math.floor(Math.random() * charset.length)];
  }
  password.textContent = result;
});
