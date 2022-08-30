const menuButtom = document.querySelector(".nav__menu");
const menuItem = document.getElementsByClassName("nav__item");

const videosList = document.querySelector(".videos__list")

const videos = [
  {
    nombre: "Top 5 mejores DRONES para ARQUITECTOS del 2022",
    urlImage: "images/Videos/Video 1.gif",
    urlWeb: "https://www.youtube.com/watch?v=aKv-npE1nNA"
  },

  {
    nombre: "Top 7 Mejores CAMARAS para AFICIONADOS a la FOTOGRAFIA del 2022",
    urlImage: "images/Videos/Video 2.gif",
    urlWeb: "https://www.youtube.com/watch?v=GGcap9tufMY"
  },

  {
    nombre: "7 DRONES PERFECTOS para Usar en vigilancia de campos",
    urlImage: "images/Videos/Video 3.gif",
    urlWeb: "https://www.youtube.com/watch?v=oLKYcBO-uVI"
  },

  {
    nombre: "TOP 8 Mejores AURICULARES para HOMEOFFICE",
    urlImage: "images/Videos/Video 4.gif",
    urlWeb: "https://www.youtube.com/watch?v=MsX849q1IPo"
  },

  {
    nombre: "TOP 7 Mejores CAMARAS para sacar FOTOS PROFESIONALES",
    urlImage: "images/Videos/Video 5.gif",
    urlWeb: "https://www.youtube.com/watch?v=bHsqdP3abbw"
  },  
]

menuButtom.addEventListener("click", showHideMenu)
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", showHideMenu)
}

agregarVideos();

function showHideMenu() {
  if (window.innerWidth < 768) {
    let menuItems = document.querySelector(".nav__items").classList.toggle("active");

    let hamburguerIcon = document.querySelector(".menu__icon").classList.toggle("hide");

    let arrrowIcon = document.querySelector(".back__icon").classList.toggle("show");
  }

}

function agregarVideos() {

  for (let i = videos.length - 1; i >= 0; i--) {
    let htmlCodde = `
    <article class="video__card">
      <img src="${videos[i].urlImage}" class="video__image">
      <a href="${videos[i].urlWeb}" class="video__title" target="_blank">${videos[i].nombre}</a>
    </article>
    `;

    videosList.innerHTML += htmlCodde
  }
}