let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {
    logoSpan.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add('active')
        }, (idx + 1) * 400) // 400ms 간격으로 lo 와 go 글자 보여줌
    })
    // span 두개가 모두 나타나는데 800ms 가 걸리므로 1.2초(2000 - 800) 후에 lo 와 go 가 사라지기 시작함
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active')
                span.classList.add('fade')
            }, (idx + 1) * 50) // 50ms 간격으로 lo 와 go 글자 사라짐
        })
    }, 2000)

    // dom 이 로드되고 2초가 되는 시점부터 로고가 50 * 2 = 100ms 동안 사라지므로 2.1초 후에는 완전히 사라짐
    // 로고가 사라지고, 0.6초후 (2700ms) 시점에 intro 를 벗겨냄
    setTimeout(() => {
        intro.style.height = '0'
    }, 2700)
})