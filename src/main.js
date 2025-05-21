var countDownDate = new Date("Oct 18 2025 00:00:00").getTime()


var x = setInterval(() => {
    var now = new Date().getTime()
    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);




}, 1000)