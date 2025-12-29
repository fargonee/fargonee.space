   <> 
   <div>
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
    </div>
    <div style="
        background: var(--bg-card);
        border: 1px solid var(--border-primary);
        border-radius: var(--border-radius);
        padding: 3rem;
        max-width: 500px;
        height: 60vh;
        width: 100%;
        position: relative;
        overflow-y: auto;
        ">
                        
                        
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
</>