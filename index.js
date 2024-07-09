const array = ["futebol", "jogos"]
const myArray = JSON.stringify(array)
localStorage.setItem("meus-interesses", myArray)
const dados = localStorage.getItem("meus-interesses")
const dadosSalvos = JSON.parse(dados)
const ul = document.querySelector('ul');
ul.innerHTML = '';
function adicionar() {
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    const input = document.querySelector("input")
    const tarefa = input.value
    li.innerText = tarefa
    ul.appendChild(li)
    input.value = ""
    const delItem = document.createElement('button')
    delItem.textContent = 'remover'
    delItem.onclick = function() {
     ul.removeChild(li)
    }
    li.appendChild(delItem)
    
    const valor = tarefa
    let arrayValores = obterArrayDoLocal()
    arrayValores.push(valor)
    salvarArrayNoLocal(arrayValores);
    const btnSave = document.querySelector("#add")
    btnSave.addEventListener("click", () => {
        let dados = [];
        if (localStorage.hasOwnProperty("meus-interesses")){
            dadosSalvos = JSON.parse(localStorage.getItem("meus-interesses"))
            dadosSalvos.push({ name: input.value })
            localStorage.setItem("meus-interesses", JSON.stringify(myArray))
        }
    })
}
async function recuperarDados() {
    try {
        dadosSalvos.forEach((dadosSalvos) => {
            const li = document.createElement('li')
            li.textContent = dadosSalvos
            ul.appendChild(li)
            const delItem = document.createElement('button')
            delItem.textContent = 'remover'
            delItem.onclick = function() {
                ul.removeChild(li)
            }  
            li.appendChild(delItem)
        })  
    }
    catch {
        alert("erro")
    }
} 
recuperarDados()
function obterArrayDoLocal() {
    const arrayString = localStorage.getItem("meus-interesses");
    return arrayString ? JSON.parse(arrayString) : [];
}
function salvarArrayNoLocal(array) {
    localStorage.setItem("meus-interesses", JSON.stringify(array));
}
  