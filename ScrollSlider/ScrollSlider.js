export default class ScrollSlider extends HTMLElement {
  constructor() {
    super();

    this.prevButton?.addEventListener("click", () => {
      this.track.scrollToPrev();
    });

    this.nextButton?.addEventListener("click", () => {
      this.track.scrollToNext();
    });

    this.track?.addEventListener("scroll", () => {
      this.handleScroll();
    });
  }

  get track() {
    return this.querySelector("scroll-slider-track");
  }

  get prevButton() {
    return this.querySelector("scroll-slider-prev-button");
  }

  get nextButton() {
    return this.querySelector("scroll-slider-next-button");
  }

  handleScroll() {
    if (this.prevButton) {
      this.prevButton.hidden = this.track?.isTrackStart();
    }

    if (this.nextButton) {
      this.nextButton.hidden = this.track?.isTrackFinish();
    }
  }
}

customElements.define("scroll-slider", ScrollSlider);
