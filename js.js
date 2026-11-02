document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("profilForm");
    const result = document.getElementById("profilResult");

    // Formulir profil: kirim data ke halaman hasil.
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const params = new URLSearchParams({
                nim: form.elements["nim"].value.trim(),
                nama: form.elements["nama"].value.trim(),
                alamat: form.elements["alamat"].value.trim(),
                hobi: form.elements["hobi"].value.trim(),
                instagram: form.elements["instagram"].value.trim()
            });

            window.location.href =
                `profil-tampil.html?${params.toString()}`;
        });
    }

    // Halaman hasil: baca data dari URL.
    if (result) {
        const params = new URLSearchParams(window.location.search);

        if (!params.toString()) {
            return;
        }

        // Membuat elemen teks agar data ditampilkan dengan aman.
        const dataProfil = [
            ["NIM", params.get("nim")],
            ["Nama", params.get("nama")],
            ["Alamat", params.get("alamat")],
            ["Hobi", params.get("hobi")],
            ["Instagram", params.get("instagram")]
        ];

        const list = document.createElement("ul");

        dataProfil.forEach(([label, value]) => {
            const item = document.createElement("li");
            const strong = document.createElement("strong");

            strong.textContent = `${label}: `;
            item.appendChild(strong);
            item.appendChild(
                document.createTextNode(value || "-")
            );

            list.appendChild(item);
        });

        result.replaceChildren(list);
    }
});