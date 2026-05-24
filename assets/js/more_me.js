class VideoElement {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }
    render() {
        return `
            <div class="carousel-slide">
                <video controls>
                    <source src="${this.src}" type="video/mp4" alt="${this.alt}">
                </video>
            </div>
        `;
    }
}
class ImageElement {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }
    render() {
        return `
            <div class="carousel-slide">
                <img src="${this.src}" alt="${this.alt}" />
            </div>
        `;
    }
}

class UniversityProjectTile {
    constructor(files, description) {
        this.files = files;
        this.description = description;
    }
    render() {
        const mediaElements = this.files.map(file => {
            // video case
            if (file.endsWith('.mp4')) {
                const video = new VideoElement(file, 'Project video');
                return video.render();
            // image case
            } else if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
                const image = new ImageElement(file, 'Project image');
                return image.render();
            }
            // default case
            return '';
        }).join('');
        return `
        <div class="carousel-container">
          <button class="carousel-arrow left-arrow" aria-label="Previous image">&#10094;</button>
          <div class="carousel-track">
            ${mediaElements}
          </div>
          <button class="carousel-arrow right-arrow" aria-label="Next image">&#10095;</button>
          <div class="service-item-text">${this.description}</div>
        </div> <br><br>
        `;
    }
}
uniProjects = [
    new UniversityProjectTile([
            "assets/images/MLSA/video.mp4",
            "assets/images/MLSA/poza1.jpeg",
        ], 
        "Microsoft Learn Student Ambassadors - In the twelfth grade built a RL agent with Q-learning algorithm. The adopted framework is Gymnasium of OpenAI"
    ),
    new UniversityProjectTile([
            "assets/images/zephyr_OS/hacktor1.jpeg",
            "assets/images/zephyr_OS/hacktor2.mp4",
            "assets/images/zephyr_OS/hacktor3.png",
            "assets/images/zephyr_OS/hacktor4.jpeg"
        ],
        "Zephyr OS Hackathon - run a monolithic kernel Zephyr OS on an open-[source|hardware|schematics] smartwatch. Configured by hand the hardware protocols for peripherals' access as IMU, display and haptics."
    ),
    new UniversityProjectTile([
            "assets/images/eelisa_budapesta/poza1.jpeg",
            "assets/images/eelisa_budapesta/poza2.jpeg",
            "assets/images/eelisa_budapesta/poza3.jpeg"
        ],
        "Presented the avionics system of NOR as a team project with Students 2Space at EELISA 2nd sciencific competition at BME, in Budapest."
    ),
    new UniversityProjectTile([
            "assets/images/musical_organ/poza1.png",
            "assets/images/musical_organ/poza2.jpeg",
            "assets/images/musical_organ/poza3.jpeg",
            "assets/images/musical_organ/poza4.jpeg",
            "assets/images/musical_organ/poza5.jpeg"
        ],
        "Bla bla lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ),
    new UniversityProjectTile([
            "assets/images/EGC_games/tema1.mp4",
            "assets/images/EGC_games/tema1_editor.mp4",
            "assets/images/EGC_games/tema2.mp4",
            "assets/images/EGC_games/tema3.mp4",
        ],
        "Implementations of 3D games harnessing the power of OpenGL and C++.",
    ),
]
const projectsList = document.querySelector('article[data-page="more me"]');
console.log("More_me article: ", projectsList);

if (projectsList) {
  projectsList.insertAdjacentHTML("beforeend", uniProjects
    .map(lang => lang.render())
    .join("")
  );

  // Initialize carousel for dynamically loaded carousels
  const carousels = projectsList.querySelectorAll(".carousel-container");

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
}