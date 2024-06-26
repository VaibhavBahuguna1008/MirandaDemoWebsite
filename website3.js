//This will work as mouse follower. It will only act at page1
var main = document.querySelector("#page1")
var crsr = document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

})
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var a = gsap.timeline()
//this will make the page to the bottom of scale 1/2
a.to("#page1",{
    y:"0vh",
    scale:0.6,
    duration:0
})
//this will shift the page to the screen of 1/2 the size as scale is 0.5
a.from("#page1",{
    y:"100vh",
    duration: 1,
    delay:1
})
//this will rotate the page and increase the scale
a.to("#page1",{
    rotate:360,
    duration:0.8,
    scale:1,
    scrub:3
})
