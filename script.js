const toggleBtn = document.querySelector('.toggle-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
//open-menu
toggleBtn.addEventListener('click',()=>{
    dropdownMenu.classList.toggle('open');
});
//close-menu
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
dropdownLinks.forEach(link => {
    link.addEventListener('click'() => {
        dropdownMenu.classList.remove('open');
    });
});