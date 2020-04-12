import Page from './components/Page'
import Header from './components/Header'
import Scroll from './components/Scroll'
import smoothscroll from 'smoothscroll-polyfill'

// Styles
import '../styles/app.scss'

class App {
  constructor() {
    this.header = null
    this.pages = []
  }

  load() {
    smoothscroll.polyfill()

    this.loadPage()
    this.loadHeader()
    this.loadScroll()
  }

  loadPage() {
    this.pages.push(new Page('home'))
    this.pages.push(new Page('about'))
    this.pages.push(new Page('projects'))
    this.pages.push(new Page('contact'))

    this.pages.forEach(page => page.load())
  }

  loadHeader() {
    this.header = new Header()
    this.header.load(this.pages)
  }

  loadScroll() {
    this.scroll = new Scroll()
    this.scroll.load(this.pages)
  }
}

window.onload = () => {
  const app = new App
  app.load()
}
