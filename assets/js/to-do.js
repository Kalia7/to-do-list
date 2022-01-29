const formField = document.querySelector('.form__field')
const formBtn = document.querySelector('.form__btn')
const listTesk = document.querySelector('.list__tesk')

formBtn.addEventListener('click', addItem)
listTesk.addEventListener('click', deleteAndCheck)

function addItem(event){
    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const tasks = document.createElement('li')
    tasks.classList.add('list__tesk')
    tasks.innerHTML = formField.value
    formField.value = ''
    todoDiv.appendChild(tasks)

    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.classList.add('complet__btn')
    todoDiv.appendChild(completeBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add('delete__btn')
    todoDiv.appendChild(deleteBtn)

    listTesk.appendChild(todoDiv)
}

/* deleteAndCheck */
function deleteAndCheck(e){

    const item = e.target

    if(item.classList[0] === 'delete__btn'){
        const todo = item.parentElement
        todo.remove()
    }

    if(item.classList[0] === 'complet__btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}