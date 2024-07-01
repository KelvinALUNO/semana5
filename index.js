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
}
