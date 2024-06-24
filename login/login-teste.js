document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email');
    const senhaInput = document.querySelector('.senha');
    const mensagemErro = document.querySelector('.mensagem-erro');

    document.getElementById('button').addEventListener('click', function() {
        const email = emailInput.value;
        const senha = senhaInput.value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuario = usuarios.find(u => u.email === email && u.senha === senha);

        if (usuario) {
            // Redirecionar para a página de perfil após o login bem-sucedido
            window.location.href = 'perfil.html'; // Substitua 'perfil.html' pela página de destino desejada
        } else {
            // Exibir mensagem de erro
            mensagemErro.style.display = 'block';
        }
    });
});

