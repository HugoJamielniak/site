console.log("Script inicializado");

const inputNome = document.getElementById("inptNome");
const inputIdade = document.getElementById("inptIdade");
const inputCPF = document.getElementById("inptCPF");
const btnSalvar = document.getElementById("btnSalvar");
const divResponse = document.getElementById("responseDiv");

btnSalvar.addEventListener('click',btnSalvarClick);

function btnSalvarClick(){
    console.log("Btn clicado!")
    let nome = inputNome.value;
    let idade =inputIdade.value;
    let CPF = inputCPF.value
    console.log(nome,idade,CPF)

    inputCPF.value="";
    inputIdade.value="";
    inputNome.value="";
    divResponse.innerHTML += `<p> ${nome} / ${idade} / ${CPF} <p/>`

}