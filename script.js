const mainContainer = document.querySelector(".main-container");
const cartIcon = document.getElementById("cartIcon");
const homeIcon = document.getElementById("homeIcon");

// Array of Items (with descriptions & prices)
const items = [
  {
    imgSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQCMSQLbsQrCIICgvcVL9cJ5MOzPgjBWfEJBShGtVXLOoT0LoPEgDLGihWFMSwjga8bpjHcw9Pjw_vlxLqCkBeekZO3f9VfDpDlP09v-O17m2j9OsB7NgbQg&usqp=CAE",
    imgAlt: "Galaxy A05s",
    heading: "Galaxy A05s",
    description:
      "Enjoy it all in stellar clarity. With the 6.7-inch FHD+ display, your favorite contents and games become immersive with seamless, vivid picture quality.",
    price: "₱7,116.00",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6irKn10fhIX0GZ4UDaRD1WoMardcRgRaRA3E0WIoiEJDoMG4WID0iUhhmvRCOsRu6uC8t5AtPiT-Tnsf7Rc-yzWr59OcvkAaRRM4GqobksbCL6W91mUzaRwo&usqp=CAE",
    imgAlt: "Galaxy A06",
    heading: "Galaxy A06",
    description:
      "Samsung Galaxy A06 - Products - Maximize your view with the Galaxy A06 6.7” large display. Smooth 60Hz scrolling and the TFT U-Cut Display",
    price: "₱6,790.00",
  },
  {
    imgSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTjnbskgLy7eZhpwHrO3Ca9jhIrBm_xKKJrQOchI7raBeoU0bKoEbzbjy7qL5ZryDwhr0ZD4-m1qwC6Qlrqlf1EoRgpMlsOkPnaOWAfQxh1vCkLm2_rU8Kv6m0&usqp=CAE",
    imgAlt: "Galaxy A55 5G",
    heading: "Galaxy A55 5G",
    description:
      "Buy Galaxy A55 5G in Awesome Iceblue color with 256GB storage. The Galaxy A55 5G (SM-A556ELBCPHL) features: 6.6 FHD+ Super AMOLED adaptive 120Hz display 50MP wide-angle camera",
    price: "₱23,741.00",
  },
  {
    imgSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZwTDPKTSdKqonQydW83mgROP0WjiwCdpF6Uh_eKKmCzI_ju4fxuaaIWFjjkFtALVjffwFRZ-NnTIWKjbl00BeaHGzSSkBdFKeGjbdmzZNxL3vLbi9yEUR&usqp=CAE",
    imgAlt: "Galaxy S24 Ultra",
    heading: "Galaxy S24 Ultra",
    description:
      "Welcome to the era of mobile AI. With Samsung Galaxy S24 Ultra in your hands, unleash creativity, productivity and possibility. ",
    price: "₱58,375.00",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaZ9TVIR7lankfjDT6qgyFMjuL1plbVaPOQl2ZoqkUFqGcpzYW_GrNr_YVIPgZd9mtYHC4mqw9hyldibTHT6MV06W8VIGdo6i0uTcP644xsi_A5UnH1YG80A&usqp=CAE",
    imgAlt: "Galaxy S25 Ultra",
    heading: "Galaxy S25 Ultra",
    description: "Smartphone · Single SIM · Android · Titanium Black",
    price: "₱84,990.00",
  },
  {
    imgSrc:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSeauHScTTjUsEzHakv3HBvbNAlHuQdOLyxj5OfwAuxIR2jtVEb7D7Rik497LjJQpI6YVliGlP7XKJcR3tgoyhGrCqpkQst4ylTjQ45meBQdXU0n-6DbmmKlg&usqp=CAE",
    imgAlt: "Samsung Galaxy Z Fold5",
    heading: "Samsung Galaxy Z Fold5",
    description:
      "PC- like power. Now in your pocket. Meet the phone with big screen like a mobile movie theater. The one that is both an exciting game console and multi-screen, multi-tasking ...",
    price: "₱54,941.00",
  },
  {
    imgSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkQJfLw-2OotzosSu48ZbHF4FVLsdgyPDaYLXBWFfoKij1c5HSVMT6TKSbIbuWKjj1HzwgAXP3eVouEE49LKb44QgLWNejhezO9awF_PcaakifvkElgdjx&usqp=CAE",
    imgAlt: "Galaxy Z Flip6",
    heading: "Galaxy Z Flip6",
    description:
      "High-quality second-hand devices with up to 12-months warranty. Buy now with 0% instalment and free delivery.",
    price: "₱40,950.00",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ5y4zsn7kY8xn7zQ31KIN78U3sXC2Hnb9BV9SyaoDY2WR-1BNZ56ZibYWjmNGhltXTWaxED9XjIfhok0pOXK8UwmrDk-M0AO6h3vPoWgo&usqp=CAE",
    imgAlt: "Galaxy Z Flip5",
    heading: "Galaxy Z Flip5",
    description:
      "Style and function that fits in your pocket. It's a pocket-sized statement piece. Small but mighty when folded, this phone is compact enough to fit in your palm",
    price: "₱37,771.00",
  },
];

let cart = []; // Array to store items added to the cart

// Function to create and display the item list (home view)
function displayItemList() {
  mainContainer.innerHTML = ""; // Clear the main container
  const itemBox = document.createElement("section");
  itemBox.className = "item-box";
  mainContainer.appendChild(itemBox);

  // Loop through each item and create elements
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-container";

    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.imgAlt;

    const h3 = document.createElement("h3");
    h3.textContent = item.heading;

    // Append image and title to item container
    itemDiv.appendChild(img);
    itemDiv.appendChild(h3);

    // Add click event to open item details modal
    itemDiv.addEventListener("click", () => openItemModal(item));

    itemBox.appendChild(itemDiv);
  });
}

// Function to display cart list
function displayCartList() {
  mainContainer.innerHTML = ""; // Clear main container
  const cartBox = document.createElement("section");
  cartBox.className = "cart-box";
  let totalPrice = 0;

  // If cart is empty, show a message
  if (cart.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "Your cart is empty.";
    cartBox.appendChild(emptyMsg);
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = item.imgAlt;

      // Convert price to number and calculate total price per item
      let itemPrice = parseFloat(item.price.slice(1).replace(/,/g, ""));
      let itemTotal = itemPrice * item.quantity;

      const details = document.createElement("div");
      details.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: ₱${itemPrice.toLocaleString("en-US", {
          minimumFractionDigits: 2,
        })}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: ₱${itemTotal.toLocaleString("en-US", {
          minimumFractionDigits: 2,
        })}</p>
      `;

      // Remove button to delete item from cart
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        cart.splice(index, 1); // Remove item from cart array
        displayCartList(); // Refresh cart display
      });

      cartItem.appendChild(img);
      cartItem.appendChild(details);
      cartItem.appendChild(removeBtn);
      cartBox.appendChild(cartItem);

      totalPrice += itemTotal; // Add item total to overall cart total
    });

    // Display total price and checkout button
    const totalCheckoutContainer = document.createElement("div");
    totalCheckoutContainer.className = "total-checkout-container";

    const totalDiv = document.createElement("div");
    totalDiv.className = "cart-total";
    totalDiv.innerHTML = `<h3>Total Price: ₱${totalPrice.toLocaleString(
      "en-US",
      { minimumFractionDigits: 2 }
    )}</h3>`;

    const checkoutBtn = document.createElement("button");
    checkoutBtn.className = "checkout-btn";
    checkoutBtn.textContent = "Check Out";
    checkoutBtn.addEventListener("click", () => {
      alert("Thank you for purchasing!");
      cart = []; // Clear cart
      displayCartList(); // Refresh cart display
    });

    totalCheckoutContainer.appendChild(totalDiv);
    totalCheckoutContainer.appendChild(checkoutBtn);
    cartBox.appendChild(totalCheckoutContainer);
  }
  mainContainer.appendChild(cartBox);
}

// Function to open item details modal
function openItemModal(item) {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

  modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${item.imgSrc}" alt="${item.imgAlt}" class="modal-img">
        <h3>${item.heading}</h3>
        <p>${item.description}</p>
        <p class="modal-price">Price: <strong>${item.price}</strong></p>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" min="1" value="1">
        <button class="add-to-cart">Add to Cart</button>
    `;

  modal.style.display = "flex"; // Show modal

  // Close modal event
  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Add item to cart event
  document.querySelector(".add-to-cart").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("quantity").value);

    cart.push({
      imgSrc: item.imgSrc,
      imgAlt: item.imgAlt,
      name: item.heading,
      price: item.price,
      quantity: quantity,
    });

    alert(`${item.heading} added to cart!`);
    modal.style.display = "none";
  });
}

// Toggle views between Home (items) and Cart
cartIcon.addEventListener("click", () => {
  cartIcon.style.display = "none";
  homeIcon.style.display = "inline-block";
  displayCartList(); // Show cart list
});

homeIcon.addEventListener("click", () => {
  homeIcon.style.display = "none";
  cartIcon.style.display = "inline-block";
  displayItemList(); // Show item list
});

// Load item list initially (default view)
displayItemList();
