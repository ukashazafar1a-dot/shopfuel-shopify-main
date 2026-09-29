/** Shopify CDN: Minification failed

Line 8:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 9:2 Transforming const to the configured target environment ("es5") is not supported yet

**/
function initializeSlider() {
  const parents = document.querySelectorAll(".hero_main"); // Select all parents
  if (parents.length === 0) {
    console.log("No hero_main elements found.");
    return;
  }

  parents.forEach((parent) => {
    const elem = parent.querySelector(".hs-slider-main");
    let nextBtn = parent.querySelector(".next-btn") || null;
    let prevBtn = parent.querySelector(".prev-btn") || null;
    if (elem && !elem.classList.contains("flickity-enabled")) {
      const slides = elem.querySelectorAll(".single_slide");
      console.log(`Found ${slides.length} slides in a slider.`);
       

      if(slides.length == 1){
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
      }

      if (slides.length > 1) {
        const rotation =
          parseInt(elem.getAttribute("data-rotation"), 10) || 3000; // Default to 3000ms
        const showArrows =
          elem.getAttribute("data-arrows")?.toLowerCase() === "true";
        const showDots =
          elem.getAttribute("data-dots")?.toLowerCase() === "true";
        const enableAutoplay =
          elem.getAttribute("data-autoplay")?.toLowerCase() === "true";     

        const options = {
          cellAlign: "left",
          freeScroll: false,
          contain: true,
          prevNextButtons: false,
          draggable: true,
          wrapAround: true,
          pauseAutoPlayOnHover: false,
          adaptiveHeight: true,
          imagesLoaded: true,
          setGallerySize: false,
          pageDots: showDots,
          autoPlay: enableAutoplay ? rotation : false,
          cellSelector: ".single_slide" // 👈 ONLY target slides
        };

        // Initialize Flickity
        const flkty = new Flickity(elem, options);

        // Add event listeners for custom navigation
        if (showArrows && nextBtn && prevBtn) {
          nextBtn.addEventListener("click", () => flkty.next());
          prevBtn.addEventListener("click", () => flkty.previous());
        }

        //console.log("Slider initialized successfully.", options);
      } else {
        console.log("Not enough slides to initialize the slider.");
      }
    } else if (elem && elem.classList.contains("flickity-enabled")) {
      console.log("Slider already initialized. Skipping...");
    } else {
      console.log("No slider found in this section.");
    }
  });
}
  
  document.addEventListener("shopify:block:select", function (event) {
    initializeSlider();
  });
  
  document.addEventListener("shopify:block:deselect", function (event) {
    initializeSlider();
  });
  
  document.addEventListener("shopify:section:load", () => {
    initializeSlider();
  });
  
  document.addEventListener("shopify:section:reorder", () => {
    initializeSlider();
  });
  
  document.addEventListener("shopify:section:select", () => {
    initializeSlider();
  });
  
  document.addEventListener("shopify:section:deselect", () => {
    initializeSlider();
  });
  
  document.addEventListener("shopify:inspector:activate", () => {
    initializeSlider();
  });
  
  document.addEventListener("shopify:inspector:deactivate", () => {
    initializeSlider();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    initializeSlider();
  });
  
  window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
      initializeSlider();
    }
  });
  if (window.Shopify.designMode) {
    initializeSlider();
  }
  
