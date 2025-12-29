const toggle = document.querySelector(".menu-toggle");
const drawer = document.querySelector(".drawer");
const closeBtn = document.querySelector(".drawer-close");
const backdrop = document.querySelector(".drawer-backdrop");

toggle.onclick = () => {
  drawer.classList.add("open");
  backdrop.classList.add("show");
};

closeBtn.onclick = backdrop.onclick = () => {
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
};
