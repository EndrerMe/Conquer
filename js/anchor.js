// не поддерживается в ie, edge и еще нескольких мобильных браузерах

const ANCHORS = document.querySelectorAll('a[href*="#"]')

for (let anchor of ANCHORS) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}