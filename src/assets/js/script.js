import { addRunningLights, createIntersectionObserver } from "./utils.js";

{
  // POWERGLITCH
  const defaultSettings = {
    timing: {
      duration: 3500,
      easing: "ease-in",
    },
    glitchTimeSpan: {
      start: 0.65,
      end: 0.75,
    },
    shake: {
      velocity: 15,
    },
    slice: {
      velocity: 35,
    },
  };
  PowerGlitch.glitch(".glitch", defaultSettings);
}

{
  // RUNNING BORDER LIGHTS
  addRunningLights(document.querySelector(".hero__section"));
}

{
  // INTERSECTION OBSERVER
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  const $curtain = document.querySelector(".curtain-item");
  const observer = createIntersectionObserver("curtain", options);
  observer.observe($curtain);
}

{
  document.addEventListener("DOMContentLoaded", function () {
    const $accordionBtns = document.querySelectorAll(".accordion__btn");
    $accordionBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const $panel = this.nextElementSibling;
        const $expandIcon = this.querySelector('span[data-name="expand-icon"]');
        const $collapseIcon = this.querySelector(
          'span[data-name="collapse-icon"]',
        );

        $panel.style.display =
          $panel.style.display === "block" ? "none" : "block";

        if ($panel.style.display === "block") {
          this.classList.add("accordion__btn--active");
          $expandIcon.classList.add("hide-icon");
          $collapseIcon.classList.remove("hide-icon");
        } else {
          this.classList.remove("accordion__btn--active");
          $expandIcon.classList.remove("hide-icon");
          $collapseIcon.classList.add("hide-icon");
        }
      });
    });
  });
}
