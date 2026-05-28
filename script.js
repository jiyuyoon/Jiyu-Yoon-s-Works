document.addEventListener("DOMContentLoaded", () => {

  // ===== カーソル =====
  const cursor = document.getElementById("cursor");

  // ===== 星コンテナ =====
  const container = document.getElementById("star-container");

  // ===== カラー =====
  const colors = ["#75dfff", "#9aff95", "#ff81ee", "#ffaf7a"];

  // ===== マウス動き =====
  let lastTime = 0;

  document.addEventListener("mousemove", (e) => {

    if (cursor) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }

    const now = Date.now();
    if (now - lastTime < 50) return;
    lastTime = now;

    if (!container) return;

    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 15 + 10;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.background = colors[Math.floor(Math.random() * colors.length)];

    star.style.left = (e.clientX + (Math.random() * 20 - 10)) + "px";
    star.style.top = (e.clientY + (Math.random() * 20 - 10)) + "px";

    container.appendChild(star);

    setTimeout(() => star.remove(), 1000);
  });

  // ===== ランダム画像 =====
  const images = [
    "img-top/1.jpg",
    "img-top/2.jpg",
    "img-top/4.jpg",
    "img-top/5.jpg",
    "img-top/6.jpg",
    "img-top/1-2.jpg",
    "img-top/7.jpg",
    "img-top/8.jpeg",
    "img-top/9.jpg",
    "img-top/10.jpg",
    "img-top/11.jpg",
    "img-top/12.png",
    "img-top/14.png",
    "img-top/15.png",
    "img-top/16.png",
    "img-top/17.png",
    "img-top/18.png",
    "img-top/19.png",
    "img-top/20.png",
    "img-top/21-01.png",
    "img-top/22-01.png",
    "img-top/23-01.png",
    "img-top/24-01.png",
    "img-top/25-01.png",
    "img-top/26.png",
    "img-top/27-01.png",
  ];

  const hoverColors = [
    "#ff81ee",
    "#75dfff",
    "#9aff95",
    "#ffaf7a",
    "#bf00ff"
  ];

  const slots = document.querySelectorAll(".random-img");

  function setRandomImages() {
    if (!slots.length) return;

    const shuffled = [...images].sort(() => Math.random() - 0.5);

    slots.forEach((img, i) => {
      img.src = shuffled[i % shuffled.length];
    });
  }

  setRandomImages();
  setInterval(setRandomImages, 10000);

  // ===== ホバー =====
  document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("mouseenter", () => {
      const randomColor =
        hoverColors[Math.floor(Math.random() * hoverColors.length)];
      img.style.border = `3px solid ${randomColor}`;
    });

    img.addEventListener("mouseleave", () => {
      img.style.border = "2px solid #000";
    });

  });

});

document.querySelectorAll(".random-img").length
document.querySelectorAll(".random-img")　