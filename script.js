const images = [
    { src: "naruto.jpeg", name: "Naruto" },
    { src: "sasuke.jpeg", name: "Sasuke" },
    { src: "pain.jpeg", name: "Pain" },
    { src: "madara.jpeg", name: "Madara" }
  ]; // Array of objects with image src and name
  let currentIndex = 0;
  
  const galleryImage = document.getElementById("gallery-image");
  const imageName = document.getElementById("image-name");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function showImage(index, direction) {
    // Remove existing animation classes
    imageName.classList.remove("slide-in", "slide-in-reverse");
  
    // Update image and name
    galleryImage.src = images[index].src;
    imageName.textContent = images[index].name;
  
    // Add sliding animation based on direction
    if (direction === "next") {
      imageName.classList.add("slide-in");
    } else if (direction === "prev") {
      imageName.classList.add("slide-in-reverse");
    }
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex, "prev");
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex, "next");
  });
  
  // Show the first image initially
  showImage(currentIndex, "next");