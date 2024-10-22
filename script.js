let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navlist.classlist.toggle('open')
}