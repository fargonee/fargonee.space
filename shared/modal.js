class ConsultationForm {
  constructor() {
    this.btn = document.getElementById("consultation-btn");
    this.scrollY = 0;
    this.init();
  }

  init() {
    if (!this.btn) return;
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.openModal();
    });
  }

  lockScroll() {
    this.scrollY = window.scrollY;
    document.body.style.top = `-${this.scrollY}px`;
    document.body.classList.add("modal-open");
  }

  unlockScroll() {
    document.body.classList.remove("modal-open");
    document.body.style.top = "";
    window.scrollTo(0, this.scrollY);
  }

  closeModal(modal) {
    this.unlockScroll();
    modal.remove();
  }

  openModal() {
    this.lockScroll();

    const modal = document.createElement("div");
    modal.className = "modal-overlay";

    modal.innerHTML = `
      <div class="modal-card">
        <button class="modal-close" aria-label="Close">×</button>

        <h3>
          ${
            window.lang === "en"
              ? "Technical Consultation Request"
              : "Texnik Konsultatsiya"
          }
        </h3>

        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
          ${
            window.lang === "en"
              ? "We'll analyze your workflow and propose a system architecture."
              : "Biz sizning ish jarayoningizni tahlil qilamiz, shunga ko'ra yechim taklif qilamiz."
          }
        </p>

        <form class="modal-form" id="consultation-form">
          <label>${
            window.lang === "en" ? "Service Type" : "Xizmat turi"
          }</label>
          <select name="service_type" required>
            <option value="" disabled selected>
              ${window.lang === "en" ? "Select service type" : "Xizmat tanlang"}
            </option>
            <option value="automation">${
              window.lang === "en" ? "Automation" : "Avtomatlashtirish"
            }</option>
            <option value="ai integration">${
              window.lang === "en"
                ? "AI Integration"
                : "Sun'iy intellekt integratsiyasi"
            }</option>
            <option value="web development">${
              window.lang === "en" ? "Web Development" : "Veb dasturlash"
            }</option>
            <option value="microservice">${
              window.lang === "en" ? "Microservice" : " Mikroxizmatlar"
            }</option>
            <option value="education">${
              window.lang === "en" ? "Education" : "Ta'lim"
            }</option>
          </select>

          <label>${window.lang === "en" ? "Description" : "Tavsif"}</label>
          <textarea name="description" rows="4" placeholder="${
            window.lang === "en"
              ? "Describe the problem"
              : "Muammoni tasvirlang"
          }" required></textarea>

          <label>${window.lang === "en" ? "First Name" : "Ism"}</label>
          <input name="first_name" required />

          <label>${
            window.lang === "en" ? "Phone Number" : "Telefon raqami"
          }</label>
          <input name="phone_number" placeholder="+998 90 123 45 67" required />

          <label>${
            window.lang === "en" ? "Contact Methods" : "Bog'lanish usullari"
          }</label>
          <div class="contact-methods">
            <label><input type="checkbox" name="contact_methods" value="sms" checked> ${
              window.lang === "en" ? "Call" : "Qo'ng'iroq"
            }/SMS</label>
            <label><input type="checkbox" name="contact_methods" value="telegram" checked> Telegram</label>
            <label><input type="checkbox" name="contact_methods" value="whatsapp" checked> WhatsApp</label>
          </div>

          <button type="submit" class="btn btn-primary">
            ${window.lang === "en" ? "Request Consultation" : "Yuborish"}
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(modal);

    modal
      .querySelector(".modal-close")
      .addEventListener("click", () => this.closeModal(modal));

    modal
      .querySelector("form")
      .addEventListener("submit", (e) => this.handleSubmit(e, modal));
  }

  async handleSubmit(e, modal) {
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.textContent = `${
      window.lang === "en" ? "Processing..." : "Ishlanmoqda..."
    }`;

    const data = new FormData(form);

    const payload = {
      first_name: data.get("first_name"),
      phone_number: data.get("phone_number"),
      service_type: data.get("service_type"),
      description: data.get("description"),
      contact_methods: data.getAll("contact_methods"), // ✅ FIXED
    };

    try {
      const res = await fetch(
        "https://fargonee.netlify.app/.netlify/functions/fargonee_landing_contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Submission failed");

      modal.querySelector(".modal-card").innerHTML = `
        <div style="text-align:center; padding:2rem">
          <div style="font-size:2rem; color:var(--success)">✓</div>
          <h3>${
            window.lang === "en" ? "Request Received" : "Qabul qilindi"
          }</h3>
          <p style="color:var(--text-secondary)">
            ${
              window.lang === "en"
                ? "We'll contact you within 24 hours."
                : "Biz siz bilan 24 soat ichida bog'lanamiz."
            }
          </p>
          <button class="btn btn-primary">${
            window.lang === "en" ? "Close" : "Yopish"
          }</button>
        </div>
      `;

      modal
        .querySelector("button")
        .addEventListener("click", () => this.closeModal(modal));
    } catch (err) {
      btn.disabled = false;
      btn.textContent =
        window.lang === "en" ? "Request Consultation" : "Yuborish";
      alert(err.message);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ConsultationForm();
});
