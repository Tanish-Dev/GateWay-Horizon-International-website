// JavaScript for footer functionality

document.addEventListener("DOMContentLoaded", function () {
  // Newsletter form submission handler
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        // Here you would normally send this to your backend
        // For now, we'll just show a success message
        emailInput.value = "";

        const button = this.querySelector("button");
        const originalText = button.innerHTML;
        button.innerHTML = "✓";
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "white";
        button.style.borderColor = "#4CAF50";

        // Reset button after 2 seconds
        setTimeout(() => {
          button.innerHTML = originalText;
          button.style.backgroundColor = "";
          button.style.color = "";
          button.style.borderColor = "";
        }, 2000);
      }
    });
  }

  // Subtle hover effect for footer links
  const footerLinks = document.querySelectorAll(".footer-column a");
  footerLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      this.style.paddingLeft = "5px";
    });

    link.addEventListener("mouseout", function () {
      this.style.paddingLeft = "0";
    });
  });

  // Social icons hover effect
  const socialLinks = document.querySelectorAll(".social-icons a");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-3px)";
    });

    link.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
