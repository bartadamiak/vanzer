const nav2 = document.querySelector(".left-nav2");


const creative = document.querySelector(".creative")


const readMore = document.querySelector(".subtitle2");

readMore.addEventListener("click", function() {
    creative.scrollIntoView({behavior: "smooth"})
})



const serviceOption = document.querySelectorAll(".option");

var serviceTitle = document.querySelector(".about-title");
console.log(serviceTitle)

var firstLetter = document.querySelector(".first-letter");
console.log(firstLetter)



for (var i = 0; i < serviceOption.length; i++) {
    serviceOption[i].addEventListener("click", function() {
        const markedOption = document.querySelector(".marked");
        markedOption.classList.remove("marked")
        this.classList.add("marked");

       

        
    })
}








