class Scroll {
  constructor() {
    //
  }

  load(pages) {
    this.pages = pages
    this.scrollToPageTop()
  }

  scrollToPageTop() {
    this.pages.forEach(page => {
      if (pageYOffset >= page.top && pageYOffset < page.bottom) {
        Scroll.toPixel(page.top)
      }
    })
  }

  static toPixel(value) {
    window.scrollTo({
      top: value,
      behavior: 'smooth'
    })
  }

  static toId(id) {
    const element = document.getElementById(id)

    if (element) {
      const pixel = element.offsetTop
      this.toPixel(pixel)
    }
  }
}

export default Scroll
