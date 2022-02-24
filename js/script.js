const buy = document.getElementById("buy")


buy.addEventListener("click",

()=>{

}

);

// section slide show
let mydivs = document.getElementsByClassName("divs");
let removeActive;
i = 0;


function slide() {

    i = i+1;
    removeActive = document.querySelector(".active");
    removeActive.classList.remove("active");
   
    if( i == mydivs.length ) {
        i = 0;

    }
    mydivs[i].classList.add("active");
}

setInterval(slide,2000);


