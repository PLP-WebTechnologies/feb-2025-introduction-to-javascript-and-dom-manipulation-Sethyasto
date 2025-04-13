function playClickSound() {
  const audio = document.getElementById("clickSound");
  audio.play();
}

function changeHeadline() {
  document.getElementById("main-heading").textContent = "CLIMB BEYOND LIMITS!";
}

function addTagline() {
  const tagline = document.getElementById("tagline");
  if (!tagline) {
    const newTag = document.createElement("p");
    newTag.id = "tagline";
    newTag.textContent = "Your journey to the peak starts here.";
    document.querySelector(".hero-text").appendChild(newTag);
  }
}

function removeTagline() {
  const tagline = document.getElementById("tagline");
  if (tagline) {
    tagline.remove();
  }
}

function bookAdventure() {
  alert("Thank you for booking your adventure with Frost Mountain Climbers!");
}

function validateForm() {
  alert("Your message has been sent successfully!");
  return true;
}