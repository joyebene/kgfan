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
const amountInput = document.getElementById("donationAmount");

donateButton.addEventListener("click", () => {

    const amount = Number(amountInput.value);

    if (!amount || amount < 100) {
        alert("Please enter a valid donation amount.");
        return;
    }

    const email = document.getElementById("donorEmail").value.trim();

    if (!email) {
        alert("Email is required.");
        return;
    }

    const paystack = new PaystackPop();

    paystack.newTransaction({

        key: "pk_live_1cf174fc3d54f04c32f3da68d5b295c1f2545457",

        email: email,

        amount: amount * 100,

        currency: "NGN",

        reference: "KGFAN_" + Date.now(),

        metadata: {

            brand: "Kingdom Gospel For All Nations",

            donation_type: "General Donation",

            source: "Website"

        },

        onSuccess(transaction) {

            alert(
                "Thank you for your donation!\nReference: " +
                transaction.reference
            );

            // Later we'll verify the payment on your backend

        },

        onCancel() {

            alert("Donation cancelled.");

        }

    });

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


/* ==========================================
   HERO COUNTERS
========================================== */

const heroCounters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseInt(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, target / 150);

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current).toLocaleString();

                requestAnimationFrame(updateCounter);

            } else {

                if (target >= 1000) {

                    counter.textContent =
                        (target / 1000).toLocaleString() + "K+";

                } else {

                    counter.textContent = target + "+";

                }

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.4
});

heroCounters.forEach(counter => counterObserver.observe(counter));