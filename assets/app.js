// Redirect target
const TARGET_URL = "https://ebank-onprem.securityfabric.me";

function go(){ window.location.replace(TARGET_URL); }

const ids = ["topCta","primaryCta","loginBtn","bottomCta"];
ids.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", go);
});

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav-links");
if (toggle && nav){
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
