import Scroll from './Scroll'

class Page {
  constructor(id) {
    this.id = id
    this.page = document.getElementById(id)
    this.readMore = this.page.querySelector('.read-more')
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
    this.listenToReadMoreClick()
  }

  listenToReadMoreClick() {
    if (this.readMore) {
      this.readMore.addEventListener('click', () => {
        const pageId = this.readMore.getAttribute('to')
        Scroll.toId(pageId)
      })
    }
  }
}

export default Page
