'use strict';

console.log('hat mat');

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

function createContactItem({ icon, title, link, linkText }) {
  return `
    <li class="contact-item">
      <div class="icon-box">
        <img src="/assets/images/sidebar_logos/${icon}" alt="${title}">
      </div>
      <div class="contact-info">
        <p class="contact-title">${title}</p>
        <a href="${link}" class="contact-link">${linkText}</a>
      </div>
    </li>
  `;
}

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
console.log("Navigation links found:", navigationLinks);
console.log("Pages found:", pages);
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

const contacts = [
  { icon: "logo-gmail.png",  title: "Email",  link: "mailto:nicola.andrei.g@gmail.com",      linkText: "Email" },
  { icon: "logo-github.png",   title: "GitHub",   link: "https://github.com/Nico7777777",      linkText: "Nico7777777" },
  { icon: "logo-location.png", title: "Location", link: "", linkText: "Bucuresti, Romania" },
  { icon: "logo-linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/andrei-nicola-6a71801a3/", linkText: "Nicola Andrei" },
];

document.querySelector(".contacts-list").innerHTML = contacts
  .map(createContactItem)
  .join("");


class ServiceItem {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  render() {
    return `
      <section class="service">
        <h3 class="h3 service-title">${this.title}</h3>
        <p class="service-item-text">${this.content}</p>
      </section>
    `;
  }
}

const services = [
  new ServiceItem(
    "USO - Utilisation of Operating Systems",
    `USO is an introductory course to bash, Linux Kernel(or Ubuntu, for newbies) and eventually a starter
    for bash scripting and low-level management of processes. Students use commands as <it>ls, chmod, kill, grep, whoami, mkdir, 
    cp, mv, ifconfig, md5sum</it>. This is only a curated list, but we can go on and on.
    <br><br>
    Apart from only teaching labs alongside a more experienced fellow as his junior, I had also had the responsability of
    writing the 2<sup>nd</sup> piece of homework, maintain the forum, the spelling and correctness of the sentence and 
    last, but not least, setup the checker's server. The homework can be found here:<a href="https://ocw.cs.pub.ro/courses/uso/teme/tema-2">USO Tema 2</a>`
  ),
  new ServiceItem(
    "FP - Functional Programming",
    `This is my <b>english-taught</b> laboratory at FILS faculty from UPB where I had the responsability of 
    explaining and exercising alongside with students functional programming, the differences between 
    Functional decomposition and OOP decomposition. Meanwhile, implementing all snippets in Scala programming language, 
    which is a strongly-typed language.
    <br><br>
    The core topics approached are recursive functions as factorial, GCD, summing, operations over a range etc., higher-order 
    functions and algebraic datatypes. We do labor the point over traits(~ classes and interfaces in Java) implementation for 
    context reusability and tail recursive functions for stack overflow avoidance.`
  ),
  new ServiceItem(
    "ED - Digital Electronics",
    `For this lab, students come with the foundamentals of analog electronics. We built upon it, the cores of digital:
    0 and 1 based upon a voltage ladder and HIGH/LOW noise margin. We generate on arduino boards specific square signals 
    in order to read both the input and the processed signals(due to a custom circuit) on oscilloscopes. 
    <br><br>
    Last, but not least they understand the cores of using a transistor - firstly a BJT and then evolving to MOSFETs. 
    Eventually they are capable to built any regular logical gate - NOT, AND, OR - using external signals and a 
    custom circuit and interpret results on a oscilloscope.`
  )
];
const aboutPage = document.querySelector("[data-page='about']");
aboutPage.insertAdjacentHTML("beforeend", services
  .map(service=> service.render())
  .join("")
);


class LanguageItem {
  constructor(lang, lvl, perc, link) {
    this.language = lang;
    this.level = lvl;
    this.percentage = perc;
    this.link = link;
  }

  render() {
    const content = `
      <div class="title-wrapper">
        <h5 class="h5">${this.language}</h5>
        <p class="service-item-text">${this.level}</p>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${this.percentage}%;"></div>
      </div>
    `;

    return `
      <li class="skills-item">
        ${this.link ? `<a href="${this.link}">${content}</a>` : content}
      </li>
    `;
  }
}

const language_tiles = [
  new LanguageItem("Romanian", "Native", 100, null),
  new LanguageItem("English", "C1", 85, "assets/images/certificates/CAE.jpeg"),
  new LanguageItem("French", "B1+", 60, null),
  new LanguageItem("Chinese", "HSK1", 30, "assets/images/certificates/HSK1.jpeg")
]
const LanguagesList = document.querySelectorAll(".skills-list")[1];
LanguagesList.insertAdjacentHTML("beforeend", language_tiles
  .map(lang => lang.render())
  .join("")
);


class ProgLangItem {
  constructor(lang, perc) {
    this.language = lang;
    this.percentage = perc;
  }
  render() {
    return `
      <li class="skills-item">
        <div class="title-wrapper">
          <h5 class="h5">${this.language}</h5>
          <p class="service-item-text">${this.percentage}</p>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: ${this.percentage}%"></div>
        </div>
      </li>
    `;
  }
}
const prog_lang_tiles = [
  new ProgLangItem("Python", 100),
  new ProgLangItem("C/C++", 90),
  new ProgLangItem("Dart & Flutter", 80),
  new ProgLangItem("Kotlin", 75),
  new ProgLangItem("Scala", 65)
]

const ProgLanguagesList = document.querySelectorAll(".skills-list")[0];
ProgLanguagesList.insertAdjacentHTML("beforeend", prog_lang_tiles
  .map(lang => lang.render())
  .join("")
);


