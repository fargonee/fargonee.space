function detectLanguage() {
  const path = window.location.pathname; // e.g. "/index.html" or "/uz/index.html"

  // Normalize path (remove trailing slash)
  const cleanPath = path.replace(/\/$/, "");

  if (cleanPath.startsWith("/uz")) {
    return "uz"; // Uzbek
  } else {
    return "en"; // Default English
  }
}

window.lang = detectLanguage();
