/* ===============================
   COUNTDOWN (SAFE & EFFICIENT)
================================ */
const target = new Date("2026-05-31T23:59:59").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.textContent = String(d).padStart(2, "0");
  hours.textContent = String(h).padStart(2, "0");
  minutes.textContent = String(m).padStart(2, "0");
  seconds.textContent = String(s).padStart(2, "0");

  if (diff === 0) clearInterval(countdownTimer);
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

/* ===============================
   BUTTON HANDLERS
================================ */
document.querySelector(".register-btn")?.addEventListener("click", () => {
  window.open("https://www.techyguide.in/robothrone/register.html", "_blank");
});

document.querySelector(".download-btn")?.addEventListener("click", () => {
  document.getElementById("cardsSection")?.classList.remove("hidden");
});

document.querySelector(".close-btn")?.addEventListener("click", () => {
  document.getElementById("cardsSection")?.classList.add("hidden");
});

document.getElementById("cardsSection")?.addEventListener("click", e => {
  if (e.target.id === "cardsSection") {
    e.currentTarget.classList.add("hidden");
  }
});

/* ===============================
   DOWNLOAD FILES
================================ */
document.querySelectorAll(".card-btn[data-file]").forEach(btn => {
  btn.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = btn.dataset.file;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
});

/* ===============================
   WATCH VIDEO
================================ */
document.querySelector(".watch-video")?.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=VIDEO_ID", "_blank");
});




/* ===============================
   ABOUT SLIDER (SAFE)
================================ */
const slider = document.querySelector(".slider-track");
if (slider) {
  slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
  });

  slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
  });
}


document.querySelectorAll(".contact-card a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Contact clicked:", link.href);
  });
});


/* ===============================
   LAZY LOAD HEAVY SECTIONS
================================ */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".theme-card, .judging-card, .prize-card").forEach(el => {
  revealObserver.observe(el);
});
