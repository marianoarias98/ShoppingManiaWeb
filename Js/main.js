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
        urlImage: "Images/Auriculares/Sennheiser IE 300.jpg",
        type: "InEar"
    },

    {
        nombre: "JBL Live Pro 2",
        urlImage: "Images/Auriculares/JBL Live Pro 2.jpg",
        type: "InEar"
    },

    {
        nombre: "Jabra Elite 4 Active",
        urlImage: "Images/Auriculares/Jabra Elite 4 Active.jpg",
        type: "InEar"
    },

    {
        nombre: "JBL Live Pro+ TWS",
        urlImage: "Images/Auriculares/JBL Live Pro+ TWS.jpg",
        type: "InEar"
    },

    {
        nombre: "JBL Reflect Mini",
        urlImage: "Images/Auriculares/JBL Reflect Mini.png",
        type: "InEar"
    },

    {
        nombre: "Shure AONIC 215",
        urlImage: "Images/Auriculares/Shure AONIC 215.png",
        type: "InEar"
    },

    {
        nombre: "KZ ZAS",
        urlImage: "Images/Auriculares/KZ ZAS.jpg",
        type: "InEar"
    },

    {
        nombre: "JBL TUNE 230NC TWS",
        urlImage: "Images/Auriculares/JBL TUNE 230NC TWS.png",
        type: "InEar"
    },

    {
        nombre: "JBL Wave 300 TWS",
        urlImage: "Images/Auriculares/JBL Wave 300 TWS.png",
        type: "InEar"
    },

    {
        nombre: "Sony WF-C500",
        urlImage: "Images/Auriculares/Sony WF-C500.jpg",
        type: "InEar"
    },

    {
        nombre: "JBL CLUB ONE",
        urlImage: "Images/Auriculares/JBL CLUB ONE.jpg",
        type: "OnEar"
    },
 
    {
        nombre: "JBL Tour One",
        urlImage: "Images/Auriculares/JBL Tour One.jpg",
        type: "OnEar"
    },

    {
        nombre: "Jabra Evolve 75 UC",
        urlImage: "Images/Auriculares/Jabra Evolve 75 UC.jpg",
        type: "OnEar"
    },

    {
        nombre: "HyperX Cloud Alpha",
        urlImage: "Images/Auriculares/HyperX Cloud Alpha.jpg",
        type: "OnEar"
    },

    {
        nombre: "Marshall Major IV",
        urlImage: "Images/Auriculares/Marshall Major IV.jpg",
        type: "OnEar"
    },

    {
        nombre: "JBL Quantum ONE",
        urlImage: "Images/Auriculares/JBL Quantum ONE.jpg",
        type: "OnEar"
    },

    {
        nombre: "JBL CLUB 700BT",
        urlImage: "Images/Auriculares/JBL CLUB 700BT.jpg",
        type: "OnEar"
    },

    {
        nombre: "Skullcandy Grind Wireless",
        urlImage: "Images/Auriculares/Skullcandy Grind Wireless.jpg",
        type: "OnEar"
    },

    {
        nombre: "Jabra Move Style Edition",
        urlImage: "Images/Auriculares/Jabra Move Style Edition.jpg",
        type: "OnEar"
    },

    
    {
        nombre: "ASTRO Gaming A20",
        urlImage: "Images/Auriculares/ASTRO Gaming A20.jpg",
        type: "OnEar"
    },

    {
        nombre: "Sony WH1000XM4",
        urlImage: "Images/Auriculares/Sony WH1000XM4.jpg",
        type: "OverEar"
    },

    {
        nombre: "BlueParrott S450-XT",
        urlImage: "Images/Auriculares/BlueParrott S450-XT.jpg",
        type: "OverEar"
    },

    {
        nombre: "JBL LIVE 650BTNC",
        urlImage: "Images/Auriculares/JBL LIVE 650BTNC.jpg",
        type: "OverEar"
    },

    {
        nombre: "JBL LIVE 660NC",
        urlImage: "Images/Auriculares/JBL LIVE 660NC.jpg",
        type: "OverEar"
    },

    {
        nombre: "Sony WH-XB910N",
        urlImage: "Images/Auriculares/Sony WH-XB910N.jpg",
        type: "OverEar"
    },

    {
        nombre: "Sennheiser HD 450 BT",
        urlImage: "Images/Auriculares/Sennheiser HD 450 BT.jpg",
        type: "OverEar"
    },

    {
        nombre: "JBL T750BTNC",
        urlImage: "Images/Auriculares/JBL T750BTNC.jpg",
        type: "OverEar"
    },

    {
        nombre: "Soundcore Life Q30",
        urlImage: "Images/Auriculares/Soundcore Life Q30.jpg",
        type: "OverEar"
    },

    {
        nombre: "AUSDOM Extra Bass",
        urlImage: "Images/Auriculares/AUSDOM Extra Bass.jpg",
        type: "OverEar"
    },

    {
        nombre: "Sennheiser HD 559",
        urlImage: "Images/Auriculares/Sennheiser HD 559.jpg",
        type: "OverEar"
    },
]

const categorieCards = document.querySelector(".categories__Cards");
const menuButtom = document.querySelector(".nav__menu");
const menuItem = document.getElementsByClassName("nav__item");



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
            <img src="${categorias[i].urlImage}" class="categorie__image" loading="lazy>
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
    let auricularesInEar = document.querySelector(".in-ear__items")
    let auricularesfiltrados = auriculares.filter(x => x.type == "InEar")
    for (let i = 0; i < 4; i++) {
        let htmlCode = `
        <article class="auricular__item">
            <img src="${auricularesfiltrados[i].urlImage}" class="auricular__image" loading="lazy">
            <a class="auricular__title">${auricularesfiltrados[i].nombre}</a>
          </article>
        `
        
        auricularesInEar.innerHTML += htmlCode;
    }

    let auricularesOnEar = document.querySelector(".on-ear__items")
    auricularesfiltrados = auriculares.filter(x => x.type == "OnEar")
    for (let i = 0; i < 4; i++) {
        let htmlCode = `
        <article class="auricular__item">
            <img src="${auricularesfiltrados[i].urlImage}" class="auricular__image" loading="lazy">
            <a class="auricular__title">${auricularesfiltrados[i].nombre}</a>
          </article>
        `
        
        auricularesOnEar.innerHTML += htmlCode;
    }

    let auricularesOverEar = document.querySelector(".over-ear__items")
    auricularesfiltrados = auriculares.filter(x => x.type == "OverEar")
    for (let i = 0; i < 4; i++) {
        let htmlCode = `
        <article class="auricular__item">
            <img src="${auricularesfiltrados[i].urlImage}" class="auricular__image" loading="lazy">
            <a class="auricular__title">${auricularesfiltrados[i].nombre}</a>
          </article>
        `
        
        auricularesOverEar.innerHTML += htmlCode;
    }
}