document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    if (username === "") {
      showError("login-username", "Tên đăng nhập không được để trống");
      return;
    }

    if (password === "") {
      showError("login-password", "Mật khẩu không được để trống");
      return;
    }

    // Kiểm tra tài khoản (Giả lập)
    if (username === "11duanayzuigke" && password === "123456") {
      alert("Đăng nhập thành công!");
      window.location.href = "banhang.html"; // Chuyển hướng sau khi đăng nhập
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });

  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
  }

  function clearErrors() {
    document
      .querySelectorAll(".error")
      .forEach((span) => (span.textContent = ""));
  }
  function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
    input.classList.add("input-error");

    setTimeout(() => {
      input.classList.remove("input-error");
    }, 500);
  }
  // Thêm sự kiện 'Enter' để submit form khi nhấn phím Enter
  document
    .getElementById("login-password")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        form.submit(); // Gọi submit form khi nhấn Enter
      }
    });
});
