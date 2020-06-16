import "./import/modules";

const btns = document.querySelectorAll('.block-service-tabs__tab')
const tabsBody = document.querySelectorAll('.block-service-tabs__tab-content')

btns.forEach((el,i) => {
  el.addEventListener('click', e => {
      tabsBody.forEach(tabBody => {
        tabBody.classList.remove('block-service-tabs__tab-active')
      })
      tabsBody[i].classList.add('block-service-tabs__tab-content-active')
  })
})