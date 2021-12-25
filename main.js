const product = document.getElementById('product');
const produc = document.getElementById('produc');
const company = document.getElementById('company');
const compan = document.getElementById('compan');
const contact = document.getElementById('contact');
const connec = document.getElementById('connec');
const hamburge = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const head = document.getElementById('Head');
product.addEventListener('click', () =>{
    produc.classList.toggle('active');
});
company.addEventListener('click' , () =>{
    compan.classList.toggle('active');
});
contact.addEventListener('click' , () =>{
    connec.classList.toggle('active');
});
hamburge.addEventListener('click' , () =>{
    hamburge.classList.toggle('active');
    nav.classList.toggle('active');
});
document.querySelectorAll('#produc').forEach(n => n.addEventListener('click', () =>{
    produc.classList.remove('active');

}));
document.querySelectorAll('#compan').forEach(n => n.addEventListener('click', () =>{
    compan.classList.remove('active');
    
}));
document.querySelectorAll('#connec').forEach(n => n.addEventListener('click', () =>{
    
    connec.classList.remove('active');
    
}));

