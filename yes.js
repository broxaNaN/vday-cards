window.addEventListener('DOMContentLoaded', function () {
    var clickState = false
    var ok = true
    var firstOption = document.getElementById("check")
    var secondOption = document.getElementById("field-two")
    var thirdOption = document.getElementById("field-three")
    var next = document.getElementById("arrow")
    var selectedOption 

    firstOption.addEventListener("click", function () {
        selectedOption = firstOption
        firstOption['border'] = '3px solid brown'
    })

    secondOption.addEventListener("keyup", function (event, finalFirstInput) {
        var firstInput = secondOption.value
        if (event.keyCode == 13)
            selectedOption = secondOption
    })

    thirdOption.addEventListener("keyup", function (event, finalFirstInput) {
        var secondInput = thirdOption.value
        if (event.keyCode == 13)
            selectedOption = thirdOption
    })

    next.addEventListener("click", function () {
        ok = false
    })

})