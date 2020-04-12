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
    this.setInitialActiveMenu()
    this.setInitialStyle()

    this.listenToClickMenu()
    this.listenToScroll()
  }

  /**
   * Set initial active menu on load page
   */
  setInitialActiveMenu() {
    this.pages.forEach(page => {
      if (pageYOffset >= page.top && pageYOffset < page.bottom) {
        this.changeActiveMenuById(page.id)
      }
    })
  }

  setStyle() {
    if (!this.isOnTop) {
      this.header.classList.add('scrolled')
    }
    else {
      this.header.classList.remove('scrolled')
    }
  }

  setInitialStyle() {
    this.setStyle()
  }

  listenToClickMenu() {
    const header = this

    this.menuItems.forEach(menu => {
      menu.addEventListener('click', function (event) {
        event.preventDefault()

        // Remove active class
        const id = event.target.getAttribute('href').replace('#', '')
        header.changeActiveMenuById(id)

        // Get Y offset
        const target = event.target.getAttribute('href')
        const yOffset = document.querySelector(target).offsetTop

        // Scroll to page
        window.scrollTo({
          top: yOffset,
          behavior: 'smooth'
        })
      })
    })
  }

  listenToScroll() {
    document.addEventListener('scroll', event => {
      this.setStyle()
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

  removeActiveClass() {
    if (this.activeMenu) {
      this.activeMenu.classList.remove('active')
    }
  }
}

export default Header
