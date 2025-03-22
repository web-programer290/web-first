'use strict'


const popUp = document.getElementById('popUp')
const formButton = document.getElementById('formButton')
formButton.onclick = () => popUp.style.display = 'flex'
popUp.onclick = () => popUp.style.display = 'none'

const readen = document.getElementById('readen')
const read = document.getElementById('read')
const readen1 = document.getElementById('readen1')
readen.onclick = () =>{
        read.style.display = 'flex'
        readen.style.display = 'none'
        readen1.style.display = 'contents'
}
readen1.onclick = () =>{
    read.style.display = 'none'
    readen.style.display = 'contents'
    readen1.style.display = 'none'
}

const second = 1000
const mininets = second*60
const hours = mininets*60
const days = hours*24
let endtime = days*20190
let rest = 0

const tickTime = document.querySelector('time')
function timer(){
    rest = endtime - Date.now()
    let day1 = Math.floor(rest/days)

    rest -= day1*days
    let hours1 = Math.floor(rest/hours)

    rest -= hours1*hours
    let mininets1 = Math.floor(rest/mininets)

    rest -= mininets1*mininets
    let second1 = Math.floor(rest/second)

    tickTime.innerText = `${day1} Дней ${hours1} Часов ${mininets1} Минут ${second1} Секунд`
    
}
setInterval(timer,1000)