/*Code to allow responsiveness and to open and close nav menu when clicking on icon with 3 lines */
let menu = document.querySelector('#NavBarMenu');
let header = document.querySelector('header');

menu.onclick = () =>{
    header.classList.toggle('active');
}

window.onscroll = () =>{
    header.classList.remove('active');
}

/*Code that allows custom cursors to update and move as you move mouse/cursor on web page */
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (h) => {
    cursor1.style.top = h.pageY + "px";
    cursor1.style.left = h.pageX + "px";
    cursor2.style.top = h.pageY + "px";
    cursor2.style.left = h.pageX + "px";
    
}

let links = document.querySelectorAll('a').forEach(links => {
    
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});