// Init particles
particlesJS("particles-js", {
  // Particles configuration
  particles: {
    number: { value: 690, density: { enable: true, value_area: 420 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.7418104910943277,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 17.361522131994906,
      direction: "left",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 2, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// Initialize Swiper
const swiper = new Swiper(".swiper", {
  // Cards effects
  effect: "cards",
  // Mousewheel to switch
  mousewheel: true,
  // Autoplay
  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true
  },
  // Effect config
  cardsEffect: {
    perSlideRotate: 1,
    perSlideOffset: 10,
  },
  // Grab cursor
  grabCursor: true
});
