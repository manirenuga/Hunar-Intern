let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuicon.onclick = ()  => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

// scrool

let section = document.querySelector('section');
let nanlinks = document.querySelector('header nav a');

window.onscroll = () => {
    section.forEach(sec => (
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        

        if(top >= offset && top < offset  + height){
            navlinks.forEach,apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
     ));

    // sticky


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // toggle icon and navbar

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    };

    // scroll
    ScrollReveal({
        distance: '10px',
        duration: 2000,
        delay: 200,
     })

     ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
     ScrollReveal().reveal('.home-img, .services-container, .portfoloi-box, .contact form', { origin: 'button'});
     ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
     ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    //  typed js
    const typed = new Typed('multiple-text', {
        strings: ['frontend Developer', 'web Designer', 'Youtuber'],
        typespeed: 70,
        backspeed: 70,
        backdelay: 1000,
        loop: true,
    });
