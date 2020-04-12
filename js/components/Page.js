class Page {
  constructor(id) {
    this.id = id
    this.page = document.getElementById(id)
  }

  get top() {
    return this.page.offsetTop
  }

  get height() {
    return this.page.offsetHeight
  }

  get bottom() {
    return this.top + this.height
  }

  load() {
    // 
  }
}

export default Page
