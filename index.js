const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === 'kenawakibsa95@gmail.com' && passwordValue === '12345') {
    // Redirect to home.html when the email and password match
    window.location.href = 'home.html';
  } else {
    // Display an error message when login fails
    errorElement.textContent = 'Invalid email or password';
  }
});

