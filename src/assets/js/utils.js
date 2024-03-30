/**
 * Adds running neon border lights in container. Needs to be position relative.
 * @param {HTMLElement} container
 */
export function addRunningLights(container) {
  const cssClasses = [
    "running-lights--top",
    "running-lights--right",
    "running-lights--bottom",
    "running-lights--left",
  ];

  cssClasses.forEach((cssclass) => {
    const el = document.createElement("span");
    el.classList.add(cssclass);
    container.appendChild(el);
  });
}

export function createIntersectionObserver(cssClass = "", options = {}) {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(cssClass);
        observer.unobserve(entry.target);
      }
    });
  }, options);
}
