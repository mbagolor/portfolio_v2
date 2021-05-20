// MENU BUTTON
const mymenubutton = document.querySelector(".menu-button");
const mysitenav = document.querySelector(".site-nav");
mymenubutton.onclick = function() {
    if (mysitenav.getAttribute("data-navstate") === "open") {
        mysitenav.setAttribute("data-navstate", "closed");
    } else {
        mysitenav.setAttribute("data-navstate", "open");
    }
};

// INTERSECTION OBSERVER
let options = {
    rootMargin: '0px',
    threshold: 0.2
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        let elem = entry.target;

        if (entry.isIntersecting) {
            elem.setAttribute('data-view', 'visible');
        } else {
            elem.setAttribute('data-view', 'hidden');
        }
    });
};

let observer = new IntersectionObserver(callback, options);


let targets = document.querySelectorAll('.scroll-element');

targets.forEach(target => {
    observer.observe(target);
})