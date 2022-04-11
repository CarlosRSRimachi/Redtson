let elemento = document.getElementsByClassName('menu')[0];

window.addEventListener('scroll',function(){
    let posY = window.scrollY;
    if(posY>0){
        elemento.style.backgroundColor="black";
    }else{
        elemento.style.backgroundColor="transparent";
    }
})