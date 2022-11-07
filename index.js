const loadDaftPunk = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "11199b50e3msh52a2017ab11122fp1bbd9cjsn6087fc9ee287",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
    }
  }

  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daftpunk", options)
    .then((response) => response.json())
    .then((response) => {
      let container = document.querySelector(".firstRow")
      for (let i = 0; i < response.data.length; i++) {
        container.innerHTML += ` <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
  <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${response.data[i].album.title} </h5>
  <p class="card=text">${response.data[i].title}</p>
  <p class="card-text">${response.data[i].duration}min</p>
  </div>
  </div>`
      }
    })
    .catch((err) => console.error(err))
}

const loadPinkFloyd = () => {
  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5d8f9f1e27msh1d9012c006ada61p1b9982jsnedaec964490a",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
    }
  }
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pinkfloyd", options2)
    .then((response) => response.json())
    .then((response) => {
      const secondContainer = document.querySelector(".secondRow")
      for (let i = 0; i < response.data.length; i++) {
        secondContainer.innerHTML += ` <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
    <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${response.data[i].album.title} </h5>
    <p class="card=text">${response.data[i].title}</p>
    <p class="card-text">${response.data[i].duration}min</p>
    </div>
    </div>`
      }
    })
    .catch((err) => console.error(err))
}

const showAlbum = function () {
  const daftPunkButton = document.querySelector(".button1")
  daftPunkButton.addEventListener("click", loadDaftPunk)

  const pinkFloydButton = document.querySelector(".button2")
  pinkFloydButton.addEventListener("click", loadPinkFloyd)
}

window.onload = () => {
  showAlbum()
}
