document.addEventListener("DOMContentLoaded", function () {

  /* Typing Effect */
  const text = "CSE Student | Web Developer | AI Enthusiast";
  let index = 0;
  const typing = document.getElementById("typing");

  function type() {
    if (index < text.length) {
      typing.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }
  type();

  /* Scroll to Contact */
  window.scrollToContact = function () {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  };

  /* Dark / Light Mode */
  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggle.textContent =
      document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });

});
