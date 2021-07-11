window.onscroll = function(){

    scroll=document.documentElement.scrollTop;

    header = document.getElementById('header');

    if (scroll >10){
        header.classList.add('boton_mov');
    } else if(scroll <10){
        header.classList.remove('boton_mov');
    }

}