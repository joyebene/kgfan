/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* ==========================================
   SMOOTH ACTIVE DONATION BUTTON
========================================== */

const amountButtons = document.querySelectorAll(".amounts button");

let selectedAmount = 5000;

amountButtons.forEach(button => {

    button.addEventListener("click", () => {

        amountButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedAmount = Number(

            button.innerText

                .replace("₦", "")

                .replace(",", "")

        );

        document.querySelector("input").value = selectedAmount;

    })

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    })

}, {
    threshold: .15
});

document.querySelectorAll(".card,.about-grid,.quote,.video-box,.donate-card")
    .forEach(el => observer.observe(el));


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const speed = 70;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + inc);

            setTimeout(update, 30);

        } else {

            counter.innerText = target.toLocaleString();

        }

    }

    update();

});


/* ==========================================
   HERO PARALLAX
========================================== */

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    if (heroBg) {
        heroBg.style.transform = `translateY(${window.scrollY * .2}px)`;
    }

});



/* ==========================================
   PAYSTACK PLACEHOLDER
========================================== */

const donateButton = document.querySelector(".donate-btn");

donateButton.addEventListener("click", () => {

    let amount = document.querySelector("input").value;

    if (amount == "") {

        alert("Please enter donation amount.");

        return;

    }

    alert("Paystack Integration Goes Here.");

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================
   MOBILE MENU
=========================== */

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


const overlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});


const gallery = new Swiper(".gallerySwiper", {

    effect: "coverflow",

    centeredSlides: true,

    slidesPerView: "auto",

    loop: true,

    grabCursor: true,

    speed: 900,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    coverflowEffect: {

        rotate: 0,

        stretch: -70,

        depth: 350,

        modifier: 2,

        scale: 0.82,

        slideShadows: false,

    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});