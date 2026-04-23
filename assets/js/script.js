'use strict';

console.log('hat mat');

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); console.log("sagetica in jos care extinde fereastra despre mine");} );



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  console.log("testimonialsModalFunc called");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {
    console.log("Clicked testimonial item:", this);
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

console.log("selectItems:", selectItems);

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    console.log("Clicked select item:", this.innerText);
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {
    console.log("bla bla; bla bla");
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    console.log("Input event on form field:", this);
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

console.log("In total, there are " + navigationLinks.length + " navigation links.");
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function() {
    console.log("puie monta");
    // Elimină clasa "active" de la toate paginile și butoane
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
    }
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }

    // Adaugă clasa "active" paginii și butonului corespunzător
    const targetPage = this.innerHTML.toLowerCase();
    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
      }
    }
    this.classList.add("active");

    window.scrollTo(0, 0);
  });
}
// add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }


// Initialize carousel functioning
const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const leftArrow = carousel.querySelector(".left-arrow");
  const rightArrow = carousel.querySelector(".right-arrow");

  if (!track || !leftArrow || !rightArrow) return;

  let currentIndex = 0;

  // Funcție pentru actualizarea caruselului
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Evenimente pentru săgeți
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Inițializare
  updateCarousel();
});