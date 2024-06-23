
var cardForm = document.getElementById("card-servico");

cardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var horario_atendimento = document.getElementById("horarioAtendimento").value;
    var categoria = document.getElementById("categoria").value;
    var escolher_recolher = document.getElementById("recolher").checked;
    var escolher_receber = document.getElementById("receber").checked;
    var descricao = document.getElementById("descricao").value;

    console.log(horario_atendimento);
    console.log(categoria);
    console.log(escolher_recolher);
    console.log(escolher_receber);
    console.log(descricao);

    let servicos = new Array();

    if (localStorage.hasOwnProperty("servicos")) {
        //Recuperar os valores de serviços
        //Converte de String para Object
        servicos = JSON.parse(localStorage.getItem("servicos"));
    }

    // Adiciona um novo objetivo no array criado
    servicos.push({ horario_atendimento, categoria, escolher_recolher, escolher_receber, descricao });

    // Salvar no LocalStorage
    localStorage.setItem("servicos", JSON.stringify(servicos));
});