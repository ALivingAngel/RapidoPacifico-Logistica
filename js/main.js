document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("msg").style.display = "block";
  e.target.reset();
});
