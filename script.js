let menue=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menue.onclick=()=>{
    menue.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menue.classList.remove('bx-x');
    navbar.classList.remove('active');
}



