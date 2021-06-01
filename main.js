//wallets

const wallet=document.querySelectorAll(".wallets");
const home=document.querySelectorAll('.page-2');

function openPageWall(e){
 removehome();


 const pagewall=document.querySelector('.page-7');
 pagewall.classList.add('show-1');

 document.body.scrollTop=document.documentElement.scrollTop =0;

}
function removehome(){
    home.forEach(item => item.classList.remove('show-1'));
}

wallet.forEach(item => item.addEventListener('click',openPageWall));


//sacrves
const scarves=document.querySelectorAll(".scarves");
const hometwo=document.querySelectorAll('.page-2');

function openPagescarve(e){
 removehometwo();

 const pagescarv=document.querySelector('.page-8');
 pagescarv.classList.add('show-1');
 document.body.scrollTop=document.documentElement.scrollTop =0;

}
function removehometwo(){
    hometwo.forEach(item => item.classList.remove('show-1'));
}

scarves.forEach(item => item.addEventListener('click',openPagescarve));


//backpakes

const backpack=document.querySelectorAll(".backpacks");
const homethree=document.querySelectorAll('.page-2');

function openPagebackpack(e){
 removehomethree();

 const pagescarv=document.querySelector('.page-9');
 pagescarv.classList.add('show-1');

 document.body.scrollTop=document.documentElement.scrollTop =0;

}
function removehomethree(){
    homethree.forEach(item => item.classList.remove('show-1'));
}

backpack.forEach(item => item.addEventListener('click',openPagebackpack));
//about

const about= document.querySelectorAll(".h1");
const details= document.querySelectorAll(".page-3");

function openPageOne(e){
    removeShow1();
   


    const page=document.querySelector(".page-4");
    page.classList.add('show-1');
    
}

function removeShow1(){
    details.forEach(item => item.classList.remove('show-1'));
}

about.forEach(item => item.addEventListener('click',openPageOne));

//contact
const contact= document.querySelectorAll(".h2");
const detail= document.querySelectorAll(".page-3");

function openPagetwo(e){
    removeShow2();
   


    const pages=document.querySelector(".page-5");
    pages.classList.add('show-1');
    
}

function removeShow2(){
    detail.forEach(item => item.classList.remove('show-1'));
}

contact.forEach(item => item.addEventListener('click',openPagetwo));

//add to cart

const cart=document.querySelectorAll('.nav-card');
const homefour=document.querySelectorAll('.page-2');

function openPageCart(e){
 removehomefour();

 const pagecart=document.querySelector('.page-6');
 pagecart.classList.add('show-1');

}
function removehomefour(){
    homefour.forEach(item => item.classList.remove('show-1'));
}

cart.forEach(item => item.addEventListener('click',openPageCart));
