export default class ScrollSliderTrack extends HTMLElement {
  get slides() {
    return [...this.children];
  }

  getNextSlide() {
    const currentScroll = this.scrollLeft;
    return this.slides.find((slide) => slide.offsetLeft > currentScroll);
  }

  getNextSlideWidht() {
    const nextSlide = this.getNextSlide();

    if (nextSlide) {
      return nextSlide.offsetLeft - this.scrollLeft;
    }
    return 0;
  }
  getPrevSlide() {
    const currentScroll = this.scrollLeft;
    return [...this.slides]
      .reverse()
      .find((slide) => slide.offsetLeft < currentScroll);
  }

  getPrevSlideWidht() {
    const prevSlide = this.getPrevSlide();

    if (prevSlide) {
      return this.scrollLeft - prevSlide.offsetLeft;
    }
    return 0;
  }

  scrollByAmount(amount) {
    this.scrollBy({ left: amount, behavior: "smooth" });
  }
  scrollToNext() {
    this.scrollByAmount(this.getNextSlideWidht());
  }
  scrollToPrev() {
    this.scrollByAmount(-this.getPrevSlideWidht());
  }
}
customElements.define("scroll-slider-track", ScrollSliderTrack);
