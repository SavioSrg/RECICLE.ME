document.addEventListener("DOMContentLoaded", function () {
  const opcaoDescartar = document.getElementById("descartar");
  const opcaoDivulgar = document.getElementById("divulgar");

  opcaoDescartar.addEventListener("change", function () {
    if (opcaoDescartar.checked) {
      window.location.href = "../nova_conta_cliente/nova-conta-cliente.html";
    }
  });

  opcaoDivulgar.addEventListener("change", function () {
    if (opcaoDivulgar.checked) {
      window.location.href = "../nova_conta_coletor/nova-conta-coletor.html";
    }
  });
});

// Verifica se há um estado salvo para os botões de rádio
if (localStorage.getItem("opcaoSelecionada")) {
  const opcaoSelecionada = localStorage.getItem("opcaoSelecionada");
  document.getElementById(opcaoSelecionada).checked = true;
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    localStorage.setItem("opcaoSelecionada", this.id);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputsObrigatorios = document.querySelectorAll("input[required]");
  const mensagemObrigatorio = document.querySelector(".mensagem-obrigatorio");

  inputsObrigatorios.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() === "") {
        mensagemObrigatorio.style.display = "block";
      } else {
        mensagemObrigatorio.style.display = "none";
      }
    });
  });
});

// Função para exibir o pop-up com uma mensagem específica
function mostrarPopup(mensagem) {
  document.getElementById("popupMessage").innerText = mensagem;
  document.getElementById("popupContainer").style.display = "flex";
}

// Função para fechar o pop-up
function fecharPopup() {
  document.getElementById("popupContainer").style.display = "none";
}

// Adiciona evento de clique ao botão Fechar
document
  .getElementById("btnFecharPopup")
  .addEventListener("click", fecharPopup);

// Adiciona evento de clique ao botão Salvar
document
  .querySelector('.botoes button[type="submit"]')
  .addEventListener("click", function () {
    mostrarPopup("Conta criada com sucesso!");
  });

// Adiciona evento de clique ao botão Cancelar
document
  .querySelector('.botoes button[type="button"]')
  .addEventListener("click", function () {
    mostrarPopup("Criação de conta cancelada.");
  });



// LocalStorage and Json
document
  .getElementById("btnSalvar")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Capturando os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cidade = document.getElementById("cidade").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Recuperando a lista de usuários do localStorage
    const usuariosJSON = localStorage.getItem("usuarios");
    const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

    // Criando um novo com os dados do formulário
    const novoUsuario = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      cidade: cidade,
      senha: senha,
      confirmarSenha: confirmarSenha,
    };

    // Adicionando o novo usuário à lista
    usuarios.push(novoUsuario);

    // Armazenando a lista atualizada no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Opcional: Exibir uma mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
  });
