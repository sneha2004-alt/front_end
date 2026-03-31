const Base_Url = "http://localhost:8080/todo";
const fetchData = async () => {
  let res = await fetch(Base_Url,{
    headers:{
       "Access-Control-Allow-Origin": "*"
    }
  })
  let data = await res.json();
  return data;
};

const addTodo = (e) => {
  e.preventDefault();

  const textValue = document.querySelector("#value").value;
  const todo = {
    text: textValue,
    isEdit: false,
    isCompleted: false,
  };
  fetch(Base_Url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

const Render_UI = async () => {
  const apiData = await fetchData();

  if (typeof apiData === "object" && !Array.isArray(apiData)) return;

  const main = document.querySelector("#todo");

  console.log("apiData");

  apiData?.forEach((items) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card_div";

    const id = document.createElement("h2");
    const text = document.createElement("h2");

    const editButton = document.createElement("button");
    const deletebutton = document.createElement("button");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    id.innerText = items.id;
    text.innerText = items.text;
    editButton.innerText = "edit";
    deletebutton.innerText = "delete";

    editButton.addEventListener("click", () => {
      const singleValue = apiData
        ?.filter((el) => el.id === items.id)
        .map((el) => (el.id === items.id ? { ...el, isEdit: true } : el));

      fetch(`${Base_Url}/${items.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(...singleValue),
      });
    });

    deletebutton.addEventListener("click", () => {
      fetch(`${Base_Url}/${items.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });

    cardDiv.append(checkBox, id, text, editButton, deletebutton);
    main.append(cardDiv);
  });
};


let dataBase = JSON.parse(localStorage.getItem(localStorage.key(0))) || [];

const addTodo = () => {
  const value = document.querySelector('#taskVal').value;

  if (value.trim() === '') return;

  const todo = {
    id: Date.now(),
    text: value,
    isEdits: false,
    isComplete: false,
  };

  dataBase.push(todo);

  localStorage.setItem('todo', JSON.stringify(dataBase));
  document.querySelector('#taskVal').value = '';
  Render_UI();
};

// read

const Render_UI = () => {
  const mainDiv = document.querySelector('#todo');

  mainDiv.innerHTML = '';

  if (!Array.isArray(dataBase)) {
    localStorage.removeItem(localStorage.key(0));
  }

  dataBase &&
    dataBase?.forEach((element) => {
      const cardDiv = document.createElement('div');

      const text = document.createElement('h3');

      const inputCheckBox = document.createElement('input');

      const inputEdits = document.createElement('input');

      const editBtn = document.createElement('button');

      const deleteBtn = document.createElement('button');

      const confirmBtn = document.createElement('button');

      const cancelBtn = document.createElement('button');

      inputCheckBox.type = 'checkbox';
      text.textContent = element.text;

      cardDiv.style =
        'display:flex;justify-content:center;align-items:center; gap:1rem ';

      editBtn.textContent = 'edit';
      deleteBtn.textContent = 'delete';

      cancelBtn.textContent = 'cancel';
      confirmBtn.textContent = 'confirm';

      inputEdits.value = element.text;

      if (element.isEdits) {
        text.style = 'display:none';
        editBtn.style = 'display:none';
        deleteBtn.style = 'display:none';

        cancelBtn.style = 'display:block';
        confirmBtn.style = 'display:block';
      } else {
        cancelBtn.style = 'display:none';
        confirmBtn.style = 'display:none';
        inputEdits.style = 'display:none';

        text.style = 'display:block';
        editBtn.style = 'display:block';
        deleteBtn.style = 'display:block';
      }

      confirmBtn.onclick = function () {
        localStorage.setItem('todo', JSON.stringify(dataBase));
        let confirmData = dataBase.map((el) =>
          el.id === element.id
            ? { ...el, text: inputEdits.value, isEdits: false }
            : el,
        );
        dataBase = confirmData;
        Render_UI();
      };

      cancelBtn.onclick = function () {
        let editData = dataBase.map((el) =>
          el.id === element.id ? { ...el, isEdits: false } : el,
        );
        dataBase = editData;
        localStorage.setItem('todo', JSON.stringify(dataBase));
        Render_UI();
      };

      editBtn.onclick = function () {
        let editData = dataBase.map((el) =>
          el.id === element.id ? { ...el, isEdits: true } : el,
        );
        dataBase = editData;
        localStorage.setItem('todo', JSON.stringify(dataBase));
        Render_UI();
      };

      deleteBtn.onclick = function () {
        dataBase.splice(
          dataBase.findIndex((el) => el.id === element.id),
          1,
        );
        console.log('🚀 ~ dataBase:', dataBase);

        localStorage.setItem('todo', JSON.stringify(dataBase));
        Render_UI();
      };

      cardDiv.append(
        inputCheckBox,
        text,
        inputEdits,
        editBtn,
        deleteBtn,
        cancelBtn,
        confirmBtn,
      );
      mainDiv.append(cardDiv);
    });
};

document.addEventListener('DOMContentLoaded', function () {
  Render_UI();
});