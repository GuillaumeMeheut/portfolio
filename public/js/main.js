//Fin de changement de couleur

///////////////////////////////////////////

//textarea remplie animation

let mytextarea = document.getElementById("contact_message");

function checkTextarea() {
  if (mytextarea.value != "") {
    mytextarea.style.opacity = "1";
  } else {
    mytextarea.style.opacity = ".4";
  }
}

mytextarea.addEventListener("change", checkTextarea);

//Fin du textarea

///////////////////////////////////////////

//Animation avec observer

function handler(entries, observer) {
  for (entry of entries) {
    // Si l'élément est dans le viewport
    if (entry.isIntersecting) {
      let elm = entry.target;
      // On lui attribue la classe .viewed pour déclencher les transitions via CSS
      elm.classList.add("viewed");
      // On arrête l'observation en lui enlevant la classe .to-observe
      elm.classList.remove("to-observe");
    } else {
      let elm = entry.target;

      // elm.classList.remove("viewed");

      // elm.classList.add("to-observe");
    }
  }
}

const elmToAnimate = document.querySelectorAll(".to-observe");

// On utilise IntersectionObserver pour détecter l'apparition d'un élément .sub-section dans le viewport : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
let observer = new IntersectionObserver(handler);

for (let i = 0; i < elmToAnimate.length; i++) {
  // On observe chaque élément
  observer.observe(elmToAnimate[i]);
}

///////////////////////////////////////////
