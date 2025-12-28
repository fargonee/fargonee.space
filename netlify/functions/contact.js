export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method not allowed" });
  }

  try {
    const { first_name, last_name, phone_number, service_type, description } =
      JSON.parse(event.body || "{}");

    // --- Validation ---
    if (
      !first_name ||
      !last_name ||
      !phone_number ||
      !service_type ||
      !description
    ) {
      return response(400, { error: "All fields are required" });
    }

    const uzPhoneRegex = /^(\+998|998)?\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    if (!uzPhoneRegex.test(phone_number)) {
      return response(400, { error: "Invalid Uzbekistan phone number" });
    }

    const allowedServices = [
      "automation",
      "ai integration",
      "web development",
      "microservice",
      "education",
      "engineering",
    ];

    if (!allowedServices.includes(service_type)) {
      return response(400, { error: "Invalid service type" });
    }

    // --- Telegram message ---
    const message = `
📩 *New FarGoneE Contact*

👤 *Name:* ${first_name} ${last_name}
📞 *Phone:* ${phone_number}
🛠 *Service:* ${service_type}

📝 *Description:*
${description}
    `.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      throw new Error("Telegram API failed");
    }

    return response(200, { success: true });
  } catch (err) {
    console.error("Contact error:", err);
    return response(500, { error: "Internal server error" });
  }
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  };
}
