let dataBase = JSON.parse(localStorage.getItem(localStorage.key(0))) || [];

const addTodo =() =>{
    const value = document.querySelector('#taskVal').value;

    const todo ={
        id:Date.now(),
        text:value,
        isEdits:false,
        isComplete:false,
    };

    dataBase.push(todo);
    localStorage.setItem('todo',JSON.stringify(dataBase));

    console.log(dataBase);
};