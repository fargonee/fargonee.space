// Scroll Animations
class ScrollAnimations {
  constructor() {
    this.fadeElements = document.querySelectorAll(".fade-in");
    this.init();
  }

  init() {
    this.checkVisibility();
    window.addEventListener("scroll", () => this.checkVisibility());
    window.addEventListener("resize", () => this.checkVisibility());
  }

  checkVisibility() {
    this.fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        element.classList.add("visible");
      }
    });
  }
}

// Form Handling
class ConsultationForm {
  constructor() {
    this.btn = document.getElementById("consultation-btn");
    this.init();
  }

  init() {
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.showModal();
    });
  }

  showModal() {
    const modal = document.createElement("div");
    modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(10, 10, 15, 0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    padding: 2rem;
                `;

    modal.innerHTML = `
                    <div style="
                        background: var(--bg-card);
                        border: 1px solid var(--border-primary);
                        border-radius: var(--border-radius);
                        padding: 3rem;
                        max-width: 500px;
                        width: 100%;
                        position: relative;
                    ">
                        <button style="
                            position: absolute;
                            top: 1rem;
                            right: 1rem;
                            background: none;
                            border: none;
                            color: var(--text-secondary);
                            font-size: 1.5rem;
                            cursor: pointer;
                        " onclick="this.parentElement.parentElement.remove()">×</button>
                        
                        <h3 style="margin-bottom: 1.5rem;">${
                          window.lang === "en"
                            ? "Technical Consultation Request"
                            : "Texnik Konsultatsiya Tashkil Qilish"
                        }</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                            ${
                              window.lang === "en"
                                ? "We'll analyze your current workflow and provide a system architecture proposal."
                                : "Biz sizning joriy ish tizimini analiz qilish va tizim arxitekturasini taqdim etishni taqdim qilamiz."
                            }
                        </p>
                        
<form id="consultation-form" style="display: flex; flex-direction: column; gap: 1rem;">
    <label for="service_type" style="font-weight: 500;">${
      window.lang === "en" ? "Service Type*" : "Xizmat Turi*"
    }</label>
    <select
        id="service_type"
        name="service_type"
        required
        style="padding: 0.75rem; background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--border-radius); color: var(--text-primary); font-family: inherit;"
    >
        <option value="" disabled selected>${
          window.lang === "en" ? "Select service type" : "Xizmat turi tanlang"
        }</option>
        <option value="automation">${
          window.lang === "en" ? "Automation" : "Avtomatizatsiya"
        }</option>
        <option value="ai integration">${
          window.lang === "en" ? "AI Integration" : "AI integratsiya"
        }</option>
        <option value="web development">${
          window.lang === "en" ? "Web Development" : "Web tashkil etish"
        }</option>
        <option value="microservice">${
          window.lang === "en" ? "Microservice" : "Microservice"
        }</option>
        <option value="education">${
          window.lang === "en" ? "Education" : "Ta'lim"
        }</option>
        <option value="engineering">${
          window.lang === "en" ? "Engineering" : "Innovatsiya"
        }</option>
    </select>

    <label for="description" style="font-weight: 500;">${
      window.lang === "en" ? "Description*" : "Tavsif*"
    }</label>
    <textarea
        id="description"
        name="description"
        placeholder=${
          window.lang === "en"
            ? "Brief description of your current workflow / challenges"
            : "Joriy ish tizimini tavsiflash va arziboshlashni taqdim etishni taqdim qilish"
        }
        rows="4"
        required
        style="padding: 0.75rem; background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--border-radius); color: var(--text-primary); font-family: inherit; resize: vertical;"
    ></textarea>

    <br>
    <label for="first_name" style="font-weight: 500;">${
      window.lang === "en" ? "First Name*" : "Ism*"
    }</label>
    <input
        id="first_name"
        name="first_name"
        placeholder="${window.lang === "en" ? "First name" : "Ism"}"
        required
        style="padding: 0.75rem; background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--border-radius); color: var(--text-primary); font-family: inherit;"
    >
    <label for="phone_number" style="font-weight: 500;">${
      window.lang === "en" ? "Phone Number*" : "Telefon Raqami*"
    }</label>
    <input
        id="phone_number"
        name="phone_number"
        placeholder="${
          window.lang === "en" ? "Phone number" : "Telefon raqamingiz (+998...)"
        }"
        required
        style="padding: 0.75rem; background: var(--bg-primary); border: 1px solid var(--border-primary); border-radius: var(--border-radius); color: var(--text-primary); font-family: inherit;"
    >

    <label for="contact_methods" style="font-weight: 500;">${
      window.lang === "en" ? "Contact methods*" : "Bog'lanish usullari*"
    }</label>
    <div style="display: flex; justify-content: space-between;">
        <label style="display: flex; align-items: center;">
            <input type="checkbox" name="contact_methods" value="sms" style="margin-right: 0.5rem;" checked>
            ${window.lang === "en" ? "Call & SMS" : "Qo'shmoq"}
        </label>
        <label style="display: flex; align-items: center;">
            <input type="checkbox" name="contact_methods" value="telegram" style="margin-right: 0.5rem;" checked>
            ${window.lang === "en" ? "Telegram" : "Telegram"}
        </label>
        <label style="display: flex; align-items: center;">
            <input type="checkbox" name="contact_methods" value="whatsapp" style="margin-right: 0.5rem;" checked>
            ${window.lang === "en" ? "WhatsApp" : "WhatsApp"}
        </label>
    </div>
    <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">
        ${
          window.lang === "en"
            ? "Request Consultation"
            : "Texnik Konsultatsiya Tashkil Qilish"
        }
    </button>
</form>
                    </div>
                `;

    document.body.appendChild(modal);

    modal.querySelector("form").addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = modal.querySelector('button[type="submit"]');
      submitBtn.innerHTML = `<span class="loading"></span> Processing...`;
      submitBtn.disabled = true;

      const formData = new FormData(modal.querySelector("form"));

      const payload = {
        first_name: formData.get("first_name"),
        phone_number: formData.get("phone_number"),
        contact_methods: formData.get("contact_methods"),
        service_type: formData.get("service_type"),
        description: formData.get("description"),
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

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Submission failed");

        modal.innerHTML = `
      <div style="text-align: center; padding: 3rem;">
          <div style="
              width: 60px;
              height: 60px;
              border: 2px solid var(--success);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 2rem;
              color: var(--success);
              font-size: 2rem;
          ">✓</div>
          <h3 style="margin-bottom: 1rem;">Request Received</h3>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">
              ${
                window.lang === "en"
                  ? "We'll review your workflow and contact you within 24 hours."
                  : "Biz sizning ish tizimini analiz qilish va 24 soat ichida siz bilan bog'lanishni taqdim qilamiz."
              } 
          </p>
          <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">
              Close
          </button>
      </div>
    `;
      } catch (err) {
        submitBtn.innerHTML =
          window.lang === "en"
            ? "Request Consultation"
            : "Texnik Konsultatsiya Tashkil Qilish";
        submitBtn.disabled = false;
        alert(err.message || "Something went wrong. Please try again.");
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // new ParticleSystem();
  new ScrollAnimations();
  new ConsultationForm();

  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
