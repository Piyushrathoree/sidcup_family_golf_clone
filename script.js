var crsr=document.querySelector("#cursur")
var blur=document.querySelector("#cursur-blur")
document.addEventListener( 'mousemove', function (dets){
    crsr.style.left=dets.x+25+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x-250+"px";
    blur.style.top=dets.y-250+"px";

})
var h4all = document.querySelectorAll(".nav h4, button,#card-container .card ");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3.5;
    crsr.style.border = "0.2px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});






gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
   backgroundColor:"#000",
   scrollTrigger:{
    trigger:"#main",
    scroll:"body",
    // markers:true,
    start:"top -30%",
    end:"top -100%",
    scrub:2
   }
})
gsap.from(".left ,.content,.right",{
    y:50,
    opacity:0,
    duration:0.3,
    
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",   
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
gsap.from(".card",{
    y:50,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",   
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
// var card=document.querySelectorAll(`.card`)
// card.addEventListener("mouseover",function(){
// card.style.transform="rotate3d(15deg)";
// })

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"html",
        start:"top 50%",
        end:"top 40%",
        scrub:1 
    }

})
gsap.from("#colon2",{
    x:80,
    y:80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"html",
        start: "bottom 50%",
        end: "bottom 40%",
        scrub: 1
    }

})
gsap.from(".page4 h1",{
    y:60,
    scrollTrigger:{
    
        trigger:".page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})