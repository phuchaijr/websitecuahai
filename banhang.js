// Mảng sản phẩm mẫu
let products = [
  {
    id: "1",
    name: "Mẹt bún chả siêu ngon",
    price: 80000,
    image: "./img/bun.jpg",
    description:
      "Mẹt bún chả là một cách bày trí món bún chả truyền thống của Hà Nội trên một chiếc mẹt (mâm tre) lót lá chuối, tạo cảm giác dân dã, hấp dẫn.",
  },
  {
    id: "2",
    name: "Bánh Xèo quảng trị",
    price: 30000,
    image: "./img/banhxeo.jpg",
    description:
      "Bánh xèo là một món ăn dân dã, phổ biến ở nhiều vùng miền Việt Nam. Món ăn này có lớp vỏ giòn rụm màu vàng hấp dẫn, thường được làm từ bột gạo pha với nước cốt dừa và nghệ.",
  },
  {
    id: "3",
    name: "Bún bò Siuu ngonn",
    price: 50000,
    image: "./img/bunbo.jpg",
    description:
      "Bún bò là một món đặc sản nổi tiếng của Huế với hương vị đậm đà, cay nhẹ và thơm nức mũi.",
  },
  {
    id: "4",
    name: "Toboki",
    price: 100000000,
    image: "./img/toboki.jpg",
  },
];
let otherProducts = [
  {
    id: "101",
    name: "Nạn nhân Lanh",
    price: 3000001,
    image: "./img/lanh.jpg",
    description:
      "Đây là nạn nhân chủ mưu thành nhóm 11 đứa zui gke xứng đáng bán qua cam vs giá này",
  },
  {
    id: "102",
    name: "Nạn nhân Bình bò",
    price: 2999999,
    image: "./img/binh.jpg",
    description:
      "với một bức ảnh sát thủ đầy nguy hiểm đối tượng này có thể bật cả lóc cũng xứng đáng giá ưu đãi",
  },
  {
    id: "103",
    name: "Nạn nhân Văn ý",
    price: 30000000,
    image: "./img/y.jpg",
    description:
      "Nạn nhân này với 1 khuôn mặt trẻ con dễ ăn hiếp có mức giá khá cao.",
  },
  {
    id: "104",
    name: "Nạn nhân Văn Phúc",
    price: 3000000,
    image: "./img/vphuc.jpg",
    description:
      "Nạn nhân này với 1 khuôn mặt trẻ con dễ ăn hiếp có mức giá khá cao.",
  },
  {
    id: "105",
    name: "Nạn nhân Tấn Tài",
    price: 20000000,
    image: "./img/tai.jpg",
    description:
      "Nạn nhân này với 1 khuôn mặt có 2 má hồng 2 bên có khả năng qua cam sẽ cân đc mấy a bên ấy cũng có giá rất cao.",
  },
  {
    id: "106",
    name: "Nạn nhân Hoài Thơm",
    price: 20000000,
    image: "./img/thom.jpg",
    description:
      "Nạn nhân này với nạn nhân tấn tài đồng giá nhau vì có khả năng hợp  tác tốt.",
  },
  {
    id: "107",
    name: "Nạn nhân Thu Thủy",
    price: 300000000,
    image: "./img/thuy.jpg",
    description:
      "Nạn nhân này giá rất cao chúng ta phải bán nhà mới mua được nạn nhân vip này vì 1 lý do chính là ' NGƯỜI ẤYYYYYYYY'.",
  },
  {
    id: "108",
    name: "Nạn nhân Tuyết Mây",
    price: 2999990,
    image: "./img/tmay.jpg",
    description:
      "Nạn nhân này không có ảnh dìm nên bán sang cam với mức giá siêu rẻ.",
  },
  {
    id: "109",
    name: "Nạn nhân Trà My",
    price: 3000000,
    image: "./img/tmy.jpg",
    description:
      "Nạn nhân này thì có giá ngang với nạn nhân lanh bởi đi với nan nhân lanh lây nhiểm rất nặng .",
  },
  {
    id: "110",
    name: "Nạn nhân Quang Huỳnh",
    price: 400000000,
    image: "./img/tinh.jpg",
    description:
      "Nạn nhân này với 1 khuôn mặt rất chi là đẹp gái khiến mấy anh bên cam mê mẫn và có khả năng cao đáp ứng nhu cầu của mấy anh ấy và có giá rất cao.",
  },
];

// Mảng giỏ hàng
let cart = [];

// Hàm hiển thị giỏ hàng
function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");

  // Cập nhật số lượng giỏ hàng
  cartCount.textContent = cart.length;

  // Xóa danh sách giỏ hàng cũ
  cartItems.innerHTML = "";

  // Thêm các sản phẩm vào giỏ hàng
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${item.name} - ${item.price.toLocaleString()}đ
            <div class="quantity-btns">
                <button onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
            <button onclick="removeFromCart(${index})">X</button>
        `;
    cartItems.appendChild(listItem);
  });
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(id, name, price) {
  const existingProductIndex = cart.findIndex((product) => product.id === id);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity++;
  } else {
    const product = { id, name, price, quantity: 1 };
    cart.push(product);
  }

  updateCartDisplay();
}

// Hàm tăng số lượng sản phẩm
function increaseQuantity(index) {
  cart[index].quantity++;
  updateCartDisplay();
}

// Hàm giảm số lượng sản phẩm
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    removeFromCart(index);
  }
  updateCartDisplay();
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Hàm hiển thị chi tiết sản phẩm trong modal
function viewProduct(id) {
  const product = products.find((p) => p.id == id);
  if (!product) return;

  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-image").src = product.image;
  document.getElementById(
    "modal-product-price"
  ).textContent = `Giá: ${product.price.toLocaleString()}đ`;
  document.getElementById("modal-product-description").textContent =
    product.description;

  document.getElementById("product-modal").style.display = "flex";
  document.getElementById("add-to-cart-modal-btn").onclick = () => {
    addToCart(product.id, product.name, product.price);
    document.getElementById("product-modal").style.display = "none";
  };
}

// Đóng modal
document.getElementById("close-modal-btn").addEventListener("click", () => {
  document.getElementById("product-modal").style.display = "none";
});

// Mở giỏ hàng
document.getElementById("cart-btn").addEventListener("click", () => {
  document.getElementById("cart").style.display = "block";
});

// Đóng giỏ hàng
document.getElementById("close-cart-btn").addEventListener("click", () => {
  document.getElementById("cart").style.display = "none";
});

// Hiển thị sản phẩm khi trang web được tải
window.onload = function () {
  displayProducts();
};

// Hiển thị các sản phẩm
function displayProducts() {
  const productList = document.getElementById("product-list");

  if (!productList) {
    console.error("Không tìm thấy phần tử 'product-list'.");
    return;
  }

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()}đ</p>
            <button onclick="addToCart('${product.id}', '${product.name}', ${
      product.price
    })">Thêm vào giỏ</button>
            <button class="view-item" onclick="viewProduct('${
              product.id
            }')">Xem mặt hàng</button>
        `;
    productList.appendChild(productDiv);
  });
}
// Xử lý khi bấm nút Thanh toán
document.getElementById("checkout-btn").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng 🎉");

  // Xóa toàn bộ giỏ hàng sau khi thanh toán
  cart = [];
  updateCartDisplay();

  // Ẩn giỏ hàng sau khi thanh toán
  document.getElementById("cart").style.display = "none";
});
// Hiển thị các sản phẩm khác (other products)
function displayOtherProducts() {
  const otherProductList = document.getElementById("other-product-list");

  if (!otherProductList) {
    console.error("Không tìm thấy phần tử 'other-product-list'.");
    return;
  }

  otherProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()}đ</p>
        <button onclick="addToCart('${product.id}', '${product.name}', ${
      product.price
    })">Thêm vào giỏ</button>
        <button class="view-item" onclick="viewProduct('${
          product.id
        }')">Xem mặt hàng</button>
      `;
    otherProductList.appendChild(productDiv);
  });
}
// Hiển thị các sản phẩm khác (other products)
function displayOtherProducts() {
  const otherProductList = document.getElementById("other-product-list");

  if (!otherProductList) {
    console.error("Không tìm thấy phần tử 'other-product-list'.");
    return;
  }

  otherProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()}đ</p>
        <button onclick="addToCart('${product.id}', '${product.name}', ${
      product.price
    })">Thêm vào giỏ</button>
        <button class="view-item" onclick="viewProduct('${
          product.id
        }')">Xem mặt hàng</button>
      `;
    otherProductList.appendChild(productDiv);
  });
}
// Hàm hiển thị chi tiết sản phẩm trong modal
function viewProduct(id) {
  // Tìm sản phẩm trong mảng products và otherProducts
  let product =
    products.find((p) => p.id == id) || otherProducts.find((p) => p.id == id);

  if (!product) return;

  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-image").src = product.image;
  document.getElementById(
    "modal-product-price"
  ).textContent = `Giá: ${product.price.toLocaleString()}đ`;
  document.getElementById("modal-product-description").textContent =
    product.description || "Mô tả chưa có";

  document.getElementById("product-modal").style.display = "flex";
  document.getElementById("add-to-cart-modal-btn").onclick = () => {
    addToCart(product.id, product.name, product.price);
    document.getElementById("product-modal").style.display = "none";
  };
}

// Đóng modal
document.getElementById("close-modal-btn").addEventListener("click", () => {
  document.getElementById("product-modal").style.display = "none";
});

// Hiển thị các sản phẩm khi trang web được tải
window.onload = function () {
  displayProducts(); // Hiển thị sản phẩm chính
  displayOtherProducts(); // Hiển thị sản phẩm khác
};
function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price"); // Lấy phần tử hiển thị tổng tiền

  // Cập nhật số lượng giỏ hàng
  cartCount.textContent = cart.length;

  // Xóa danh sách giỏ hàng cũ
  cartItems.innerHTML = "";

  let totalPrice = 0; // Biến lưu tổng tiền

  // Thêm các sản phẩm vào giỏ hàng
  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity; // Cộng dồn tổng tiền

    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${item.name} - ${item.price.toLocaleString()}đ
            <div class="quantity-btns">
                <button onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
            <button onclick="removeFromCart(${index})">X</button>
        `;
    cartItems.appendChild(listItem);
  });

  // Cập nhật tổng tiền vào phần tử HTML
  totalPriceElement.textContent = `Tổng tiền: ${totalPrice.toLocaleString()}đ`;
}
