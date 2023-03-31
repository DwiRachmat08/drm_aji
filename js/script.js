// alert('tes')

document.addEventListener('DOMContentLoaded', () => {
    // alert('coba');
    AOS.init();
})

let toggleBtn = document.querySelector('.toggle_btn');
let toggleBtnIcon = document.querySelector('.toggle_btn i');
let dropDownMenu = document.querySelector('.dropdown_menu');
let text = document.getElementById('text');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log('yoi');

    // text.style.marginTop = value * 2.5 + 'px';
})

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    let isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}


