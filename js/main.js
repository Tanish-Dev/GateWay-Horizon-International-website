// Main JavaScript file for GateWay Horizon International website

document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");

  // Handle navigation item clicks and active state
  const navItems = document.querySelectorAll(".nav-item");

  // Set active class based on current page
  const currentPage = window.location.pathname.split("/").pop();
  navItems.forEach((item) => {
    const itemText = item.textContent.trim().toLowerCase();

    // Set Home as active by default on index.html
    if (
      (currentPage === "" || currentPage === "index.html") &&
      itemText === "home"
    ) {
      item.classList.add("active");
    }
    // For other pages
    else if (currentPage.includes(itemText.replace(" ", "-"))) {
      item.classList.add("active");
    }

    // Add click event listener
    item.addEventListener("click", function () {
      // Handle navigation based on item text
      switch (itemText) {
        case "home":
          window.location.href = "index.html";
          break;
        case "shop":
          window.location.href = "pages/shop.html";
          break;
        case "about us":
          window.location.href = "pages/about.html";
          break;
        case "contact":
          window.location.href = "pages/contact.html";
          break;
      }
    });

    // Add hover sound effect (subtle)
    item.addEventListener("mouseenter", function () {
      // Add a subtle visual pulse effect
      this.style.transition = "transform 0.2s ease";
      this.style.transform = "scale(1.05)";
      setTimeout(() => {
        this.style.transform = "";
      }, 200);
    });
  });
});
