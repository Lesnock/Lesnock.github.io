class Scroll {
  constructor() {

  }

  load(pages) {
    this.pages = pages
    this.scrollToPageTop()
    this.listenToScroll()
  }

  scrollToPageTop() {
    this.pages.forEach(page => {
      if (pageYOffset >= page.top && pageYOffset < page.bottom) {
        Scroll.toPixel(page.top)
      }
    })
  }

  listenToScroll() {
    document.addEventListener('scroll', () => {

    })
  }

  static toPixel(value) {
    window.scrollTo({
      top: value,
      behavior: 'smooth'
    })
  }
}

export default Scroll
