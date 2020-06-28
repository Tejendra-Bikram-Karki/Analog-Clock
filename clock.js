/*setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hour-hand")
const minuteHand = document.querySelector("[data-minute-hand")
const secondHand = document.querySelector("[data-second-hand")

function setClock() {
    let currentDate = new Date()
    let secondsRatio = currentDate.getSeconds() / 60
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    let hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock(); */


setInterval(() =>{
    const multiplier = 6;
    const hr = document.querySelector("#hour");
    const mn = document.querySelector("#minute");
    const sc = document.querySelector("#second");

    let day = new Date();
    let hour = day.getHours()*30;
    let minute = day.getMinutes()*multiplier;
    let second = day.getSeconds()*multiplier;
   
    hr.style.transform = `rotateZ(${hour + (minute/12)}deg)`
    mn.style.transform = `rotateZ(${minute}deg)`
    sc.style.transform = `rotateZ(${second}deg)`
})