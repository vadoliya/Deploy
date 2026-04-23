
// Navbar active
document.querySelectorAll(".nav-links li").forEach(item => {
  item.onclick = () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  };
});

// Book button click
document.querySelectorAll(".book-btn").forEach(btn => {
  btn.onclick = () => {
    alert("Booking feature coming soon 🎟️");
  };
});