// Preloader

document.body.onload = function(){

    setTimeout(function() {
        let loader = document.getElementById('page-preloader');
        if( !loader.classList.contains('done')){
            loader.classList.add('done');
        }
    }, 1000);
}

// header
let navMenu = document.querySelector('.nav-menu');
let burger = document.querySelector('.burger');
let headerOverlay = document.querySelector('.header-overlay');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    headerOverlay.classList.toggle('hidden');
});
document.querySelectorAll('.nav-link').forEach((elem)=>elem.addEventListener('click',()=>{
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    headerOverlay.classList.add('hidden');
}));
headerOverlay.addEventListener('click', ()=>{
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    headerOverlay.classList.add('hidden');    
});

// Modal 
let btn = document.getElementById('btn'),
    modal = document.querySelector('.modal'),
    close = document.getElementById('close'),
    overlay = document.querySelector('.overlay');

const openModal = function(){
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
        const closeModal = function(){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');        
        }

        btn.addEventListener('click',openModal);
        close.addEventListener('click',closeModal);
        overlay.addEventListener('click', closeModal);