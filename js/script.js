let title=document.querySelector(".title")
document.addEventListener("keyup",function(event){
    keyuphandler(event)
    let keyname=event.key
    let upercase=keyname.toLocaleUpperCase()
    let key=document.getElementById(upercase)
    key.classList.add("hit")
    key.addEventListener("animationend",function(){
        key.classList.remove("hit")
    })
    
    
})
function keyuphandler(event){
if(event.code==="Backspace"){
    title.innerHTML=title.innerHTML.slice(0,-1)
    return
}
title.innerHTML+=event.key
}