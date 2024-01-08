const header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',this.window.scrollY>80)
})

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
  
    imageContainer.addEventListener("mouseenter", function () {
      image1.classList.toggle("hidden");
      image2.classList.toggle("hidden");
    });
  
    imageContainer.addEventListener("mouseleave", function () {
      image1.classList.toggle("hidden");
      image2.classList.toggle("hidden");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const rainContainer = document.querySelector(".rain-container");

    for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement("div");
        raindrop.className = "raindrop";
        raindrop.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración de la animación aleatoria
        rainContainer.appendChild(raindrop);
    }
});


//abrir menu//
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');
menu.onclick=()=>{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}
//cerrar//

window.onscroll=()=>{
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');

}
//scrollreveal
const sr=ScrollReveal({
  origin:'top',
  distance:'85px',
  duration:2500,
  reset:false
})
sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});
sr.reveal('.container',{delay:400});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:300});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn,.shop-content',{delay:300});

sr.reveal('.review,.contact',{delay:300});

document.addEventListener("DOMContentLoaded", function () {
  const transitionLayer = document.getElementById("transition-layer");

  // Muestra la capa de bienvenida
  setTimeout(function () {
      transitionLayer.classList.add("hide");
  }, 3000); // Muestra la bienvenida durante 3 segundos

  // Después de ocultar la capa de bienvenida, muestra el contenido de la página
  setTimeout(function () {
      transitionLayer.style.display = "none"; // Oculta la capa de bienvenida
      document.body.style.overflow = "visible"; // Permite el desplazamiento
  }, 5000); // Ajusta según sea necesario (3 segundos de bienvenida + 2 segundos de rotación)
});
