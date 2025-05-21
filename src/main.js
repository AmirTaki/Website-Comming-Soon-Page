var countDownDate = new Date("Oct 18 2025 00:00:00").getTime()


var x = setInterval(() => {
    var now = new Date().getTime()
    var distance = countDownDate - now
    
    console.log(distance)
}, 1000)