const heartsLayer = document.getElementById("hearts");
const heartButton = document.getElementById("heartButton");
const buttonMessage = document.getElementById("buttonMessage");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.45 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  heartsLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), 15000);
}

// A gentle background sprinkle, kept subtle so the letter remains easy to read.
window.setInterval(createHeart, 1500);

heartButton.addEventListener("click", () => {
  buttonMessage.textContent = "One little heart — and a promise to do better. ♡";
  for (let i = 0; i < 12; i++) {
    window.setTimeout(createHeart, i * 100);
  }
});

// Show a friendly reminder if a photo filename hasn't been replaced/added yet.
document.querySelectorAll(".photo-card img").forEach((img) => {
  img.addEventListener("error", () => {
    img.alt = "Add your photo file to the images folder using the matching filename.";
    img.style.objectFit = "contain";
    img.style.padding = "18px";
    img.style.color = "#8e7180";
    img.style.fontSize = "12px";
    img.style.background = "linear-gradient(135deg, #f9dbe5, #f7edf1)";
    img.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="600" viewBox="0 0 500 600"><rect width="500" height="600" fill="#f9e6ed"/><text x="250" y="275" text-anchor="middle" font-family="Arial" font-size="24" fill="#a35b78">Your photo goes here</text><text x="250" y="315" text-anchor="middle" font-family="Arial" font-size="18" fill="#a35b78">${img.getAttribute("src").split("/").pop()}</text><text x="250" y="355" text-anchor="middle" font-family="Arial" font-size="42" fill="#d85d83">♡</text></svg>`
    );
  }, { once: true });
});
