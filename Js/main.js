const categorias = [
    {
        nombre: "Auriculares",
        urlImage: "Images/Categorias/Auriculares.jpg"
    },

    {
        nombre: "Camaras",
        urlImage: "Images/Categorias/Camera.jpg"
    },

    {
        nombre: "Drones",
        urlImage: "Images/Categorias/Drone.jpg"
    }
]

const categorieCards = document.querySelector(".categories__Cards");
const menuButtom = document.querySelector(".nav__menu");
const menuItem = document.getElementsByClassName("nav__item");



agregarCategorias();


menuButtom.addEventListener("click",showHideMenu)
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click",showHideMenu)
}

function agregarCategorias () {

    for (let i = 0; i < categorias.length; i++) {
        let htmlCode = `
        <article class="categorie__item">
            <img src="${categorias[i].urlImage}" class="categorie__image">
            <h3 class="categorie__title"><a href="#">${categorias[i].nombre}</a></h3>
        </article>
        `

        categorieCards.innerHTML += htmlCode;
    }

}
function showHideMenu (){
    if (window.innerWidth <768){
        let menuItems = document.querySelector(".nav__items").classList.toggle("active");

        let hamburguerIcon = document.querySelector(".menu__icon").classList.toggle("hide");
    
        let arrrowIcon = document.querySelector(".back__icon").classList.toggle("show");
    }
   
}