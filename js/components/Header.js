import Scroll from './Scroll'

class Header {
  constructor() {
    this.header = document.querySelector('#app > header')
    this.menu = this.header.getElementsByClassName('menu')[0]

    this.menuItems = []
    for (let i = 0; i < this.menu.children.length; i++) {
      this.menuItems.push(this.menu.children[i])
    }
  }

  get activeMenu() {
    return document.querySelector('header .active')
  }

  get isOnTop() {
    return pageYOffset === 0
  }

  load(pages) {
    this.pages = pages
    this.setActiveMenu()
    this.setInitialStyle()

    this.listenToClickMenu()
    this.listenToScroll()
  }

  /**
   * Set initial active menu on load page
   */
  setActiveMenu() {
    this.pages.forEach(page => {
      if (pageYOffset >= page.top && pageYOffset < page.bottom) {
        this.changeActiveMenuById(page.id)
      }
    })
  }

  /**
   * Add/Remove class based on page y position
   */
  setStyle() {
    if (!this.isOnTop) {
      this.header.classList.add('scrolled')
    }
    else {
      this.header.classList.remove('scrolled')
    }
  }

  /**
   * Set style when the page is loaded
   */
  setInitialStyle() {
    this.setStyle()
  }

  /**
   * Scroll page when click menu
   */
  listenToClickMenu() {
    const header = this

    this.menuItems.forEach(menu => {
      menu.addEventListener('click', function (event) {
        event.preventDefault()

        // Remove active class
        const id = event.target.getAttribute('href').replace('#', '')

        // Wait page finish moving to change active menu
        setTimeout(() => {
          header.changeActiveMenuById(id)
        }, 100)

        // Get Y offset
        const target = event.target.getAttribute('href')
        const yOffset = document.querySelector(target).offsetTop
        // Scroll to page
        Scroll.toPixel(yOffset)
      })
    })
  }

  /**
   * Set the style of the header (scroll and no-scrolled)
   * page is scrolled
   */
  listenToScroll() {
    document.addEventListener('scroll', event => {
      this.setStyle()
      this.setActiveMenu()
    })
  }

  /**
   * Change active menu
   * @param {string} id Id of page
   */
  changeActiveMenuById(id) {
    this.removeActiveClass()

    document
      .querySelector('header a[href="#' + id + '"]')
      .parentElement
      .classList.add('active')
  }

  /**
   * Remove active class from current active menu
   */
  removeActiveClass() {
    if (this.activeMenu) {
      this.activeMenu.classList.remove('active')
    }
  }
}

export default Header
