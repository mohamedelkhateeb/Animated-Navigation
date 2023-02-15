let cont = document.querySelector('.container')
let logo = document.querySelector('.logo')
let closeButton = document.querySelector('.close')
let ulEle = document.querySelector('.list')
let lis = document.querySelectorAll('.list li')
let openButton = document.querySelector('.open')


console.log(lis)

closeButton.addEventListener("click" , function(){
    ulEle.classList.add("remove")
    this.classList.add("remove")
    cont.classList.add("dec")
    openButton.style.display = "block"
    logo.classList.add("remo")
})

openButton.addEventListener("click" , function(){
    ulEle.classList.toggle("remove")
    closeButton.classList.toggle("remove")
    cont.classList.toggle("dec")
    ulEle.classList.add("response")
    this.classList.toggle('buttonRes')
    openButton.style.display = "none"
    logo.classList.remove("remo")

})

lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){ 
            ele.classList.remove('active')
        })
        ele.classList.add('active')
    }
})
