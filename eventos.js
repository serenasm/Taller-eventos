document.addEventListener("DOMContentLoaded", function(){
    let div = document.getElementById("div")
    div.addEventListener("click", function(){
       alert("Hola!Soy el div")
    })

    let button = document.getElementById("button")
    button.addEventListener("click", function(){
        event.stopPropagation()
    })
})


