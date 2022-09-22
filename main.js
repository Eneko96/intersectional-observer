const $ = (el) => document.querySelector(el)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  {
    threshold: 1
  }
)
const box = document.querySelectorAll('.box')
box.forEach((b) => {
  observer.observe(b)
})

const main = $('.box-container')

const lastBoxObs = new IntersectionObserver((entries) => {
  const lastBox = entries[0]
  console.log(lastBox)
  if (!lastBox.isIntersecting) return
  console.log('holi')
  lastBoxObs.unobserve(lastBox.target)
  lastBoxObs.observe(document.querySelector('.box:last-child'))
  addMore()
})
const lastBoxObserved = lastBoxObs.observe(
  document.querySelector('.box:last-child')
)

function addMore() {
  for (let i = 0; i < 10; ++i) {
    const boxx = document.createElement('div')
    const p = boxx.appendChild(document.createElement('p'))
    p.textContent = 'I am a Box'
    boxx.classList.add('box')
    observer.observe(boxx)
    main.append(boxx)
  }
}
