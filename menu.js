document.addEventListener("DOMContentLoaded", function () {
  fetchMenuItems();

  function fetchMenuItems() {
    const url =
      "https://script.google.com/macros/s/AKfycbw0tz8nujnt4MV6rUG5X1gNKdxwapw6szIlsHYpI63p16RaFDiju1Hy9b_shAt8BhQ/exec";


     // const seasonal = "seasonal-menu-item";
     // const signature = "signature-menu-item";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const menuItems = data.filter((item) => item.key === "seasonal-menu-item" || item.key === "signature-menu-item");
        updateMenu(menuItems);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function updateMenu(menuItems) {
    updateSignatureMenu(menuItems);
    updateSeasonalMenu(menuItems);
  }

  function updateSeasonalMenu(menuItems) {
    const seasonalMenu = "seasonal-menu-container";
    const menuContainer = document.getElementById(seasonalMenu);

    const data = menuItems.filter((item) => item.key === "seasonal-menu-item");

    menuContainer.innerHTML = ""; // Clear existing content

    data.forEach((item) => {
      const menuItemElement = createMenuItemElement(item);
      menuContainer.appendChild(menuItemElement);
    });
  }

  function updateSignatureMenu(menuItems) {
    const signatureMenu = "signature-menu-container";
    const menuContainer = document.getElementById(signatureMenu);

    const data = menuItems.filter((item) => item.key === "signature-menu-item");

    menuContainer.innerHTML = ""; // Clear existing content

    data.forEach((item) => {
      const menuItemElement = createMenuItemElement(item);
      menuContainer.appendChild(menuItemElement);
    });
  }

  const title = document.createElement("h4");

  function createMenuItemElement(item) {
    const li = document.createElement("li");

    const title = document.createElement("h4");
    if (item.name && item.price) {
        title.textContent = `${item.name} - $${item.price}`;
    } else if (item.name) {
        title.textContent = item.name;
    }

    const description = document.createElement("p");
    description.textContent = item.description || "Description not available";

    li.appendChild(title);
    li.appendChild(description);

    return li;
  }
});
