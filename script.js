window.addEventListener('DOMContentLoaded', function () {
    console.log("It's working!")
    
    var yesButton = document.getElementById("yes-button")
    var noButton = document.getElementById("no-button")

    yesButton.addEventListener("click", function () {
        window.location.href = "yes.html";
    })

    yesButton.addEventListener("auxclick", function () {
        window.open("yes.html");
    })

    noButton.addEventListener("click", function() {
        window.location.href = "no.html";
    })

    noButton.addEventListener("auxclick", function () {
        window.open("no.html");
    })
})