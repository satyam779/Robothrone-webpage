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
   CANVAS BACKGROUND (OPTIMIZED)
================================ */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d", { alpha: false });

const DPR = Math.min(devicePixelRatio || 1, 1.5);
let W, H;

function resize() {
  W = canvas.width = innerWidth * DPR;
  H = canvas.height = innerHeight * DPR;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
resize();
addEventListener("resize", resize);

/* ================= SETTINGS ================= */
const COUNT = innerWidth < 768 ? 90 : 160;
const MAX_DIST = 120;

/* ================= NODE ================= */
class Node {
  constructor() {
    this.x = Math.random() * innerWidth;
    this.y = Math.random() * innerHeight;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > innerWidth) this.vx *= -1;
    if (this.y < 0 || this.y > innerHeight) this.vy *= -1;
  }
}

const nodes = Array.from({ length: COUNT }, () => new Node());

/* ================= LOOP ================= */
function animate() {
  ctx.fillStyle = "#050b14";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  ctx.beginPath();
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    a.update();

    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = dx * dx + dy * dy;

      if (d < MAX_DIST * MAX_DIST) {
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
      }
    }
  }

  ctx.strokeStyle = "rgba(0,198,255,0.28)";
  ctx.stroke();

  requestAnimationFrame(animate);
}

animate();


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
