let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    crearCard(data)
  });

let container = document.getElementById("container")

function crearCard(data) {

  let cardsHTML = ""

  for (let i = 0; i < data.length; i++) {
    cardsHTML += `
    <div class="card">
      <p class="nombre_card">Nombre: ${data[i].name}</p>
      <p>Usuario: ${data[i].username}</p>
      <p>Email: ${data[i].email}</p>
    </div>
    `
  }
  container.innerHTML = cardsHTML
}



