const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".list");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".list a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navList.classList.remove("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll(".list a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

(function() {
  emailjs.init("PFmBesHQj3AwONLqm");
})();

const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  if (!params.name || !params.email || !params.message) {
    alert("Please complete all fields.");
    return;
  }

  const serviceID = "service_zxrydv4"; 
  const templateID = "template_8uvztw2"; 

  emailjs.send(serviceID, templateID, params)
    .then(() => {
      statusMessage.style.color = "green";
      statusMessage.innerHTML = "Message Sent Successfully!";
      form.reset();
      setTimeout(() => statusMessage.innerHTML = "", 3000);
    })
    .catch((err) => {
      statusMessage.style.color = "red";
      statusMessage.innerHTML = "Failed to send message. Please try again.";
      console.error("EmailJS Error:", err);
    });
});
