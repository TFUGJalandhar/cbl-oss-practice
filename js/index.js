document.addEventListener("DOMContentLoaded", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();

  const ul = document.createElement("ul");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    ul.appendChild(li);
  });

  const placeholder = document.getElementById("placeholder");
  placeholder.appendChild(ul);
});
