document.getElementById("formKonsultasi").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nama = document.getElementById("nama").value;
    const kontak = document.getElementById("kontak").value;
    const kebutuhan = document.getElementById("kebutuhan").value;
    const budget = document.getElementById("budget").value;
    const pesan = document.getElementById("pesan").value;
  
    const params = new URLSearchParams({
      nama,
      kontak,
      kebutuhan,
      budget,
      pesan
    });
  
    window.location.href = "chat.html?" + params.toString();
  });
  