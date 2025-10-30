export default class ScrollSlider extends HTMLElement {
  constructor() {
    super();

    if (this.prevButton) {
      this.prevButton.addEventListener("click", () => {
        this.track.scrollToPrev();
      });
    }
    if (this.nextButton) {
      this.nextButton.addEventListener("click", () => {
        this.track.scrollToNext();
      });
    }
  }

  get track() {
    return this.querySelector("scroll-slider-track");
  }
  get prevButton() {
    return this.querySelector("scroll-slider-prev-button ");
  }

  get nextButton() {
    return this.querySelector("scroll-slider-next-button ");
  }
}

customElements.define("scroll-slider", ScrollSlider);
