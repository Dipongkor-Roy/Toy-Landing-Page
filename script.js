
var main=document.querySelector("#main")
var image=document.querySelector("#page>img")

main.addEventListener("mousemove",function(details){
    image.style.top=1-details.y*0.05+"px";
    image.style.left=1-details.x*0.05+"px";
})