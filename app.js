const navToggle = document.getElementById("navToggle");
const navLink = document.getElementById("navLink");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLink.classList.toggle("active");
});

// toggle navigation

// close navigation when click

document.querySelectorAll(".nav-link a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLink.classList.remove("active");
  });
});

// smooth scroll.........

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", () => {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// add background when scrolling

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (this.window.scrollY > 50) {
    header.style.backgroundColor = "#000000";
    header.style.transition = "background-color 0.3s ease";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// membership js part...........................

const membershipPlans = [
  {
    name: "Pass 'Trial'",
    price: "$ 0",
    features: [
      "Access to the gym from 8:00 to 14:00",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass 'Easy Start'",
    price: "$ 119",
    features: [
      "Visit without restrictions 24/7",
      "Individual training program",
      "Access to the VTRAINER application",
      "Trainer support",
    ],
  },
  {
    name: "Pass 'Free Time'",
    price: "$ 49",
    features: [
      "The entrance time to the gym is from 14:00 to 16:00",
      "Without suspension of gym membership",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass '1 Month 24/7'",
    price: "$ 85",
    features: [
      "Visit without restrictions 24/7",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass 'In Shape (AM)'",
    price: "$ 165",
    features: [
      "Training in mini-groups until 14:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
  {
    name: "Pass 'In Shape (PM)'",
    price: "$ 195",
    features: [
      "Training in mini-groups until 17:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
];

// function to render membership plans
function renderMembershipPlans() {
  const membershipGrid = document.getElementById("membershipPlans");

  membershipGrid.innerHTML = membershipPlans
    .map(
      (plan) => `
  <div class="membership-card">
            <h3>${plan.name}</h3>
            <div class="price">${plan.price}</div>
            <ul>
            ${plan.features
              .map(
                (feature) => `
                <li>
                <img src="./images/icons/check-icon.png" alt="" />
                <span>${feature}</span>
              </li>
                `,
              )
              .join("")}
              
            </ul>
            <button class="buy-btn">Buy</button>
          </div>
           `,
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", () => {
  renderMembershipPlans();
});

// <!-- slider functionality......................-->

const sliderWrapper = document.getElementById("sliderWrapper");
const indicatorsContainer = document.getElementById("sliderIndicators");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const sliderImage = [
  "./images/gym-1.png",
  "./images/gym-2.png",
  "./images/gym-3.png",
  "./images/gym-4.png",
];

// creat a function

function initializeSlider() {
  let currentIndex = 0;

  // current slider image

  sliderImage.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = `Gym image ${index + 1}`;
    sliderWrapper.appendChild(img);

    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));

    indicatorsContainer.appendChild(indicator);
  });
  // update slider function

  const updateSlider = () => {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // update indicator

    document.querySelectorAll(".indicator").forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  };

  // go to the spacefic slider

  const goToSlide = (index) => {
    currentIndex = index;
    updateSlider();
  };

  // next btn

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % sliderImage.length;
    updateSlider();
  };

  nextBtn.addEventListener("click", nextSlide);

  // previous btn............
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + sliderImage.length) % sliderImage.length;
    updateSlider();
  };

  prevBtn.addEventListener("click", prevSlide);

  // auto play intervel
  let autoPlayInterval = setInterval(nextSlide, 3000);

  // pause autoplay on hover
  sliderWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval);
  });
  sliderWrapper.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, 3000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});

// <!-- ANIMATION SECTION -->

const animation = ScrollReveal({
  distance: "50px",
  duration: 1500,
  delay: 300,
  reset: true,
  easing: "ease",
});

animation.reveal(".hero-content", {
  delay: 200,
  origin: "left",
  distance: "100px",
});

animation.reveal(".advantages h2", {
  delay: 200,
  origin: "bottom",
});

animation.reveal(".advantage-item", {
  delay: 300,
  origin: "right",
  interval: 200,
});

animation.reveal(".membership h2", {
  delay: 200,
  origin: "bottom",
});

animation.reveal(".membership-grid", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});

animation.reveal(".membership-card", {
  delay: 400,
  origin: "bottom",
  interval: 200,
});

animation.reveal(".about-text", {
  delay: 200,
  origin: "left",
  distance: "100px",
});

animation.reveal(".about-slider", {
  delay: 400,
  origin: "right",
  distance: "100px",
});

// Trainers Section
animation.reveal(".trainers h2", {
  delay: 200,
  origin: "bottom",
});

animation.reveal(".trainers-grid", {
  delay: 300,
  origin: "bottom",
});

animation.reveal(".trainer-card", {
  delay: 400,
  origin: "bottom",
  interval: 200,
  distance: "30px",
  scale: 0.85,
});

// Footer Section
animation.reveal(".footer-info", {
  delay: 200,
  origin: "bottom",
});

animation.reveal(".footer-address", {
  delay: 300,
  origin: "bottom",
});

animation.reveal(".footer-contact", {
  delay: 400,
  origin: "bottom",
});
