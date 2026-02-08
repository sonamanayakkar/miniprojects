
let hours = document.getElementById("hours")
let minitues = document.getElementById("minitues")
let seconds = document.getElementById("seconds")
let am = document.getElementById("am")

setInterval(() => {
    let date = new Date();

    hours.innerText = date.getHours()
    minitues.innerText = date.getMinutes()
    seconds.innerText = date.getSeconds()

    
}, 1000)
let date = new Date();  




