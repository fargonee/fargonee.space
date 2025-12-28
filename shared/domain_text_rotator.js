const domains_en = [
  "Education",
  "Electronics",
  "Engineering",
  "Web Development",
  "AI",
  "Automation",
  "Microservices",
];

const domains_uz = [
  "Ta'lim",
  "Elektronika",
  "Innovatsiya",
  "Veb ishlab chiqarish",
  "AI",
  "Avtomatlashtirish",
  "Mikroxizmatlar",
];
let index = 0;
const domainSpan = document.getElementById("domain-text");

setInterval(() => {
  index =
    (index + 1) %
    (window.lang === "en" ? domains_en.length : domains_uz.length);
  domainSpan.textContent =
    window.lang === "en" ? domains_en[index] : domains_uz[index];
}, 800); // change every 2.5 seconds
