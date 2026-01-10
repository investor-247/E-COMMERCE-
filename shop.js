
  const profileBtn = document.getElementById("profileBtn");
  const profileOverlay = document.getElementById("profileOverlay");
  const closeProfile = document.getElementById("closeProfile");

  profileBtn.addEventListener("click", () => {
    profileOverlay.style.display = "flex";
  });

  closeProfile.addEventListener("click", () => {
    profileOverlay.style.display = "none";
  });


  profileOverlay.addEventListener("click", (e) => {
    if (e.target === profileOverlay) {
      profileOverlay.style.display = "none";
    }
  });