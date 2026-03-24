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
