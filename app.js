let startBtn = document.querySelector('.startBtn')
let restBtn = document.querySelector('.restBtn')
let boll = document.querySelector('.img')
let count = 0;
let flyInterval;
let click = false
let flyBoll = () => {
    click = !click
    let startFly = () => {
        flyInterval = requestAnimationFrame(startFly)
        count++
        if (click) {
            if (count < 400) {
                boll.style.top = count + 'px'

            } else {
                cancelAnimationFrame(flyInterval)
            }
        } else {
            cancelAnimationFrame(flyInterval)
        }
    }
    startFly()


    }


startBtn.addEventListener('click', flyBoll)

restBtn.addEventListener('click', () => {
    count = 0
    boll.style.top = '0px'
    cancelAnimationFrame(flyInterval)
})
