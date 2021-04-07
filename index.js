const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const nav_bar = document.getElementById('nav_bar');
document.onclick=function(e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'nav_bar') {
        toggle.classList.remove('active');
        nav_bar.classList.remove('active');      
    }
}
toggle.onclick = function() {
    toggle.classList.toggle('active');
    nav_bar.classList.toggle('active');
}
const loading = document.getElementById('loading');
function myFunction() {
    loading.style.display = 'none';
}