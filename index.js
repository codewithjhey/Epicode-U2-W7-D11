const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "11199b50e3msh52a2017ab11122fp1bbd9cjsn6087fc9ee287",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
  }
}

let container = document.querySelector(".firstRow")

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daftpunk", options)
  .then((response) => response.json())
  .then((response) => {
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

let secondContainer = document.querySelector(".secondRow")

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pinkfloyd", options)
  .then((response) => response.json())
  .then((response) => {
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
