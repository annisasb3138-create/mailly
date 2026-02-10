const form = document.getElementById("wishForm");
const linkDiv = document.getElementById("link");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simpan data
  const id = Date.now();
  const wishData = {
    to: document.getElementById("to").value,
    text: document.getElementById("wish").value,
    photo: null
  };

  // kalau ada foto
  const fileInput = document.getElementById("photo");
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      wishData.photo = e.target.result;

      // simpan ke localStorage
      localStorage.setItem(id, JSON.stringify(wishData));

      // generate link
      const link = `${location.origin}/open.html?id=${id}`;
      linkDiv.innerHTML = `✨ Share this link: <br><a href="${link}">${link}</a>`;

      alert("✨ Your wish is saved! ✨");
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    // tanpa foto
    localStorage.setItem(id, JSON.stringify(wishData));
    const link = `${location.origin}/open.html?id=${id}`;
    linkDiv.innerHTML = `✨ Share this link: <br><a href="${link}">${link}</a>`;
    alert("✨ Your wish is saved! ✨");
  }
});
