function validarLogin() {

    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
    
    });

    const nameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');

    const nameRegex = /^[a-zA-Z\s]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!nameRegex.test(nameInput.value)) {
        nameError.innerHTML = 'Por favor, insira um nome válido.';
      } else {
        nameError.innerHTML = '';
      }

      if (!passwordRegex.test(passwordInput.value)) {
        passwordError.innerHTML = 'A senha deve conter 8 digitos <br> Pelomenos uma letra. <br> Pelomenos um número.';
      } else {
        passwordError.innerHTML = '';
      }

      if (nameInput.value && passwordRegex.test(passwordInput.value)) {
        window.location.href = 'principal.html';
      }
    });
}


