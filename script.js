// Selecionando o formulário e a área da mensagem
const form = document.getElementById('formNumeros');
const mensagem = document.getElementById('mensagem');

// Adicionando evento de submissão ao formulário
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio do formulário para evitar o recarregamento da página

    // Capturando os valores dos campos A e B
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Verificando se o valor de B é maior que A
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});