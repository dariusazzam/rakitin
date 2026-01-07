function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    alert("Harap isi semua field terlebih dahulu.");
    return false; // ❌ batal submit → tidak reload
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Format email tidak valid.");
    return false;
  }

  alert("Pesan berhasil dikirim!");

  return true; 
}
