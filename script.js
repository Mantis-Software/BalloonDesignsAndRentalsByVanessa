  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const closeBtn = document.querySelector(".close");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;
  const imageUrls = Array.from(galleryItems).map(item =>
    item.style.backgroundImage.slice(5, -2) // remove url("...") around path
  );

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = imageUrls[index];
      currentIndex = index;
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    modalImg.src = imageUrls[currentIndex];
  };

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    modalImg.src = imageUrls[currentIndex];
  };

  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };




  const balloonCount = 20;
  const balloonImages = [
    './images/balloon_icon.png', // you can add more URLs
    './images/balloon_icon_gold.png', // you can add more URLs

  ];

  for (let i = 0; i < balloonCount; i++) {
    const img = document.createElement('img');
    
    img.src = balloonImages[Math.round(Math.random())]; // You can randomize if using more
    img.className = 'balloon';

    // Random horizontal position (within the screen width)
    img.style.left = Math.random() * 80 + 'vw';

    // Random animation delay
    img.style.animationDelay = Math.random() * 2 + 's';

    // Optional: random size
    const size = 60 + Math.random() * 60;
    img.style.width = size + 'px';

    document.body.appendChild(img);
  }