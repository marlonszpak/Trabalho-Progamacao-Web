
function validarCheckout() {

    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
    
    });

    const check = document.getElementById('texto-check')

    const nameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const celularInput = document.getElementById('celular');
    const diasInput = document.getElementById('dias');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const celularError = document.getElementById("celularError");
    const diasError = document.getElementById('diasError');

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const celularRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/;
    const diasRegex = /^\d+$/;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!nameRegex.test(nameInput.value)) {
        nameError.innerHTML = 'Por favor, insira um nome válido';
      } else {
        nameError.innerHTML = '';
      }

      if (!emailRegex.test(emailInput.value)) {
        emailError.innerHTML = 'Digite um email valido <br> Deve conter "@" <br> Deve conter "."';
      } else {
        emailError.innerHTML = '';
      }

      if (!celularRegex.test(celularInput.value)) {
        celularError.innerHTML = 'Digite um celular valido';
      } else {
        celularError.innerHTML = '';
      }

      if (!diasRegex.test(diasInput.value)) {
        diasError.innerHTML = 'Digite um dia valido';
      } else {
        diasError.innerHTML = '';
      }

      if (nameInput.value && emailRegex.test(emailInput.value) && celularRegex.test(celularInput.value) && diasRegex.test(diasInput.value)) {
        check.innerHTML = 'Carro alugado no nome de: ' + nameInput.value +'<br> Com o celular: ' + celularInput.value + '<br> Com o email: ' + emailInput.value + ' <br> Dias alugados: ' + diasInput.value;
      }
    });
}


