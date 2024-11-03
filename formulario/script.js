// Seleciona o elemento principal do container
const container = document.querySelector('.container');

// Seleciona o botão de registro
const registerBtn = document.querySelector('.register-btn');

// Seleciona o botão de login
const loginBtn = document.querySelector('.login-btn');

// Adiciona um evento de clique ao botão de registro
registerBtn.addEventListener('click', () => {
    // Adiciona a classe 'active' ao container, ativando o formulário de registro
    container.classList.add('active');
});

// Adiciona um evento de clique ao botão de login
loginBtn.addEventListener('click', () => {
    // Remove a classe 'active' do container, ativando o formulário de login
    container.classList.remove('active');
});
