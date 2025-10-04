document.getElementById("year").textContent = new Date().getFullYear();

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMail(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;
  window.location.href = `mailto:zeki@example.com?subject=Portfolio Inquiry from ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(msg + "\n\nFrom: " + name + " (" + email + ")")}`;
  return false;
}
