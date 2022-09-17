
document.getElementsByClassName("1")[0].classList.add("hide");
var totalnoofslide=6;
let n=1;
function previous(){
    console.log("its work");
    
    if(n-1 == 0){
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=6;
        document.getElementsByClassName(n)[0].classList.add("hide");
    }
    else{
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=n-1;
        document.getElementsByClassName(n)[0].classList.add("hide");

    }
    
    
    
}
function next(){
    if(n+1 > totalnoofslide){
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=1;
        document.getElementsByClassName(n)[0].classList.add("hide");
    }
    else{
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=n+1;
        document.getElementsByClassName(n)[0].classList.add("hide");


    }
}

function showmenu(){
    document.querySelector("nav").classList.remove("transistup");
    document.querySelector("nav").classList.add("transist");
    setTimeout(function(){
        document.getElementsByClassName("left-container")[0].style.display="block";
    },300);
    document.getElementsByClassName("ham")[0].style.display="none";
    
    document.getElementsByClassName("cross")[0].style.display="block";

}

function hidemenu(){
    document.querySelector("nav").classList.add("transistup");
    document.querySelector("nav").classList.remove("transist");
    document.getElementsByClassName("left-container")[0].style.display="none";
    document.getElementsByClassName("ham")[0].style.display="block";
    
    document.getElementsByClassName("cross")[0].style.display="none";


}

function addtocart(){
   console.log( document.getElementsByClassName("buy-container")[0].firstElementChild.src);
}

