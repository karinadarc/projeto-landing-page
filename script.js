const simulaLogin = (event) => {

    event.target.innerHTML = "Seja bem-vindo(a)"
}

document.getElementById("btn-login").addEventListener("click", simulaLogin)

// ----------------------------------------

document.getElementById("info-formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const formulario = event.target




    if (!document.getElementById("nome").checkValidity()) {
        alert("Preencha um nome");
        return
    }

    if (!document.getElementById("telefone").checkValidity()) {
        alert("Preencha o número de telefone");
        return
    }

    if (!document.getElementById("email").checkValidity()) {
        alert("Preencha um e-mail");
        return
    }

    if (!document.getElementById("data-nascimento").checkValidity()) {
        alert("Preencha a data de nascimento");
        return
    }

    if (!document.getElementById("categoria-select").checkValidity()) {
        alert("Selecione uma das opções ");
        return
    }

    alert('A 4Food agradece pela confiança! Entraremos em contato através do e-mail: ' + document.getElementById("email").value)

    formulario.reset();



});

document.getElementById("hamburguer").addEventListener("click", () => {

    const menus = document.querySelectorAll(".hamburguer-menu")
    menus.forEach(element => {

        element.classList.toggle("invisivel")

    });



})

const fechaClick = () => {
    const menus = document.querySelectorAll(".hamburguer-menu")
    menus.forEach(element => {

        element.classList.add("invisivel")
    });

}




