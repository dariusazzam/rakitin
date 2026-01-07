document.addEventListener("DOMContentLoaded", function () {
    const greetingEl = document.getElementById("greeting");
  
    if (!greetingEl) return;
  
    const hour = new Date().getHours();
    let greeting = "";
  
    if (hour >= 5 && hour < 12) {
      greeting = "Selamat Pagi 👋";
    } else if (hour >= 12 && hour < 15) {
      greeting = "Selamat Siang ☀️";
    } else if (hour >= 15 && hour < 18) {
      greeting = "Selamat Sore 🌇";
    } else {
      greeting = "Selamat Malam 🌙";
    }
  
    greetingEl.textContent = greeting + ", selamat datang di Rakit.In!";
  });  