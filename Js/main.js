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

const auriculares = [
    {
        nombre: "Sennheiser IE 300",
        urlImage: "Images/Auriculares/Sennheiser IE 300.jpg"
    },

    {
        nombre: "JBL Live Pro 2",
        urlImage: "Images/Auriculares/JBL Live Pro 2.jpg"
    },

    {
        nombre: "Jabra Elite 4 Active",
        urlImage: "Images/Auriculares/Jabra Elite 4 Active.jpg"
    },

    {
        nombre: "JBL Live Pro+ TWS",
        urlImage: "Images/Auriculares/JBL Live Pro+ TWS.jpg"
    },

    {
        nombre: "JBL Reflect Mini",
        urlImage: "Images/Auriculares/JBL Reflect Mini.png"
    },

    {
        nombre: "Shure AONIC 215",
        urlImage: "Images/Auriculares/Shure AONIC 215.png"
    },

    {
        nombre: "KZ ZAS",
        urlImage: "Images/Auriculares/KZ ZAS.jpg"
    },

    {
        nombre: "JBL TUNE 230NC TWS",
        urlImage: "Images/Auriculares/JBL TUNE 230NC TWS.png"
    },
]

const categorieCards = document.querySelector(".categories__Cards");
const menuButtom = document.querySelector(".nav__menu");
const menuItem = document.getElementsByClassName("nav__item");
const auricularesInEar = document.querySelector(".auriculares__items")


agregarCategorias();
agregarAuriculares();

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
function agregarAuriculares (){
    for (let i = 0; i < auriculares.length; i++) {
        let htmlCode = `
        <article class="auricular__item">
            <img src="${auriculares[i].urlImage}" class="auricular__image">
            <a class="auricular__title">${auriculares[i].nombre}</a>
          </article>
        `
        
        auricularesInEar.innerHTML += htmlCode;
    }
}