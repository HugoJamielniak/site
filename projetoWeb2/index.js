console.log("Script inicializado");

const inputNome = document.getElementById("inptNome");
const inputRA1 = document.getElementById("inptRA1");
const inputRA2 = document.getElementById("inptRA2");
const inputRA3 = document.getElementById("inptRA3");
const inputRA4 = document.getElementById("inptRA4");


const btnSalvar = document.getElementById("btnSalvar");
const divResponse = document.getElementById("responseDiv");

btnSalvar.addEventListener('click',btnSalvarClick);



function btnSalvarClick(){
    console.log("Btn clicado!")
    
    let nome = inputNome.value;
    let ra1 = inputRA1.value;
    let ra2 = inputRA2.value;
    let ra3 = inputRA3.value;
    let ra4 = inputRA4.value;

    let Ra1 = Number(ra1)
    let Ra2 = Number(ra2)
    let Ra3 = Number(ra3)
    let Ra4 = Number(ra4)

    console.log(nome)

    notaFinal = Ra1 + Ra2 + Ra3 + Ra4;
    notaDivisão = notaFinal/4;

    inputRA1.value=0;
    inputRA2.value=0;
    inputRA3.value=0;
    inputRA4.value=0;
    inputNome.value="";
    divResponse.innerHTML += `<p> ${nome} / ${notaFinal} / ${notaDivisão} <p/>`

}