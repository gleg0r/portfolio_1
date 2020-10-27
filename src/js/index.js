import "./import/modules";


const btns = document.querySelectorAll('.block-service-tabs__tab')
const tabsBody = document.querySelectorAll('.block-service-tabs__tab-content')
const btn = document.querySelector('.block-video-demo__btn')
let prevMain = document.getElementById('prevMain')
let nextMain = document.getElementById('nextMain')
let prevThird = document.getElementById('prevThird')
let nextFirst = document.getElementById('nextFirst')

btns.forEach((el,i) => {
  el.addEventListener('click', e => {
    tabsBody.forEach(tabBody => {
      tabBody.classList.remove('block-service-tabs__tab-content-active')
    })
  tabsBody[i].classList.add('block-service-tabs__tab-content-active')
  })
})
          
btn.addEventListener('click', e => {
    document.getElementById('video').classList.remove('block-video-demo__vid-hide')
    document.getElementById('video').classList.add('block-video-demo__vid')
})

prevMain.addEventListener('click', e => {
    document.getElementById('second').classList.remove('block-team-show')
    document.getElementById('second').classList.add('block-team-hide')
    document.getElementById('first').classList.remove('block-team-hide')
    document.getElementById('first').classList.add('block-team-show')
})

nextMain.addEventListener('click', e => {
    document.getElementById('second').classList.remove('block-team-show')
    document.getElementById('second').classList.add('block-team-hide')
    document.getElementById('third').classList.remove('block-team-hide')
    document.getElementById('third').classList.add('block-team-show')
})

prevThird.addEventListener('click', e => {
    document.getElementById('third').classList.remove('block-team-show')
    document.getElementById('third').classList.add('block-team-hide')
    document.getElementById('second').classList.remove('block-team-hide')
    document.getElementById('second').classList.add('block-team-show')
})

nextFirst.addEventListener('click', e => {
    document.getElementById('first').classList.remove('block-team-show')
    document.getElementById('first').classList.add('block-team-hide')
    document.getElementById('second').classList.remove('block-team-hide')
    document.getElementById('second').classList.add('block-team-show')
})

