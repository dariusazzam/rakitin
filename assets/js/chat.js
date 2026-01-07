let chatStep = 0;
        
const params = new URLSearchParams(window.location.search);
const nama = params.get("nama");
const kontak = params.get("kontak");
const kebutuhan = params.get("kebutuhan");
const budget = params.get("budget");
const pesan = params.get("pesan");

const chatBox = document.getElementById("chatMessages");
const inputBox = document.getElementById("chatInput");

if (!nama) {
inputBox.value = "Halo kak, aku mau rakit PC nih!";
}

function addMessage(text, type = "admin") {
const div = document.createElement("div");
div.className = `message msg-${type}`;
div.innerHTML = text;
chatBox.appendChild(div);
chatBox.scrollTop = chatBox.scrollHeight;
}

if (nama) {
addMessage(`
    <strong>Ringkasan Konsultasi:</strong><br>
    Nama: ${nama}<br>
    Kontak: ${kontak}<br>
    Kebutuhan: ${kebutuhan}<br>
    Budget: ${budget}<br>
    Catatan: ${pesan}
`, "system");

addMessage("Hai! Admin segera bantu ya 🙌", "admin");
chatStep = 1; 
}

function sendMessage() {
const text = inputBox.value.trim();
if (!text) return;

addMessage(text, "user");
inputBox.value = "";

if (chatStep === 0) {
    setTimeout(() => {
    addMessage(
        "Siap kak! Kak mau rakit PC buat apa nih? Desain? Editing? Kuliah? Gaming? 🙌",
        "admin"
    );

    setTimeout(() => {
        addMessage(
        "Atau kakak bisa isi form konsultasi dulu biar lebih lengkap ⬇️",
        "admin"
        );

        addMessage(
        "<button onclick=\"window.location.href='index.html#konsultasi'\" style='background:#0066ff;color:white;border:0;padding:8px 14px;border-radius:8px;margin-top:6px;cursor:pointer;'>Isi Form Konsultasi</button>",
        "admin"
        );
    }, 600);
    }, 600);

    chatStep = 1;
    return;
}

if (chatStep === 1) {
    setTimeout(() => {
    addMessage(
        "Oke kak! Admin siapin rekomendasi rakitannya dulu ya ✨",
        "admin"
    );
    }, 600);

    chatStep = 2;
    return;
}

if (chatStep >= 2) {
    setTimeout(() => {
    addMessage("Siap kak, dicatat ya! 🙏", "admin");
    }, 600);
}
}

document.getElementById("sendBtn").onclick = sendMessage;
inputBox.addEventListener("keypress", (e) => {
if (e.key === "Enter") sendMessage();
});