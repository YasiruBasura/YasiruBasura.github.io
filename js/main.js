//navigation bar effects on scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});



//Website dark/light mode
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains('sun') ? 'sun' : 'moon';

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themeBtn.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun');
}





//Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, section-title-02',{delay: 500, origin:'left'});  
ScrollReveal().reveal('.home .info h2',{delay: 500, origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn',{delay: 600, origin:'right'});
ScrollReveal().reveal('.home .info h2',{delay: 500, origin:'left'});
ScrollReveal().reveal('.home .info .btn',{delay: 700, origin:'bottom'});
ScrollReveal().reveal('.media-icons i',{delay: 500, origin:'left',interval:200});  //the interval option is used to delay the reveal of each icon
ScrollReveal().reveal('.home-img, about-img',{delay: 500, origin:'bottom'});
ScrollReveal().reveal('.about .description',{delay: 300, origin:'left'});
ScrollReveal().reveal('.about .professional-list li',{delay: 300, origin:'right', interval: 100});
// ScrollReveal().reveal('.portfolio .img-card-container .img-card',{delay: 800, origin:'bottom', interval: 200});




//Portfolio section - Modal
// const blockBgScroll = document.querySelectorAll('.block-bg-scroll');
const portfolioModals = document.querySelectorAll('.portfolio-model');

const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn');

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
    // blockBgScroll[modalClick].classList.add("block");
    document.body.classList.add("modal-open");
}
imgCards.forEach((imgCard, i) => {
       imgCard.addEventListener("click", () => {
            portfolioModal(i);
        });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => { 
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    });
});


//Responsive navigation bar
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-items a');

menuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => { 
    navigation.classList.remove('active');
}); 

navItems.forEach((navItem) => { 
    navItem.addEventListener('click', () => { 
        navigation.classList.remove('active');
    });
}); 

    