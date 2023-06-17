
let TodoArray = []
let todos = document.querySelector('.todos')
function add(){
    const todoInput = document.getElementById('todoInput').value
    TodoArray.push(todoInput)
    document.getElementById('todoInput').value = ''

    console.log(TodoArray)
    todo()
}

function todo(){
    let todosHTML = '';
    for (let i of TodoArray) {
        todosHTML += `
        <div class = "p-3 container d-flex justify-content-between text-center border">
            <p>Todo : ${i}</p>
            <div class="d-flex">
            <button class="btn btn-primary mx-2">Edit</button>
            <button class="btn btn-danger">Delete</button>
            </div>
        </div>
        `;
    }
    todos.innerHTML = todosHTML;
}