document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();
    let isValid = true;

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    if (username.value.trim() === "") {
      showError(username, "Tên đăng nhập không được để trống");
      isValid = false;
    }

    if (!validateEmail(email.value)) {
      showError(email, "Email không hợp lệ");
      isValid = false;
    }

    if (password.value.length < 6) {
      showError(password, "Mật khẩu phải có ít nhất 6 ký tự");
      isValid = false;
    }

    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Mật khẩu xác nhận không khớp");
      isValid = false;
    }

    if (isValid) {
      alert("Đăng ký thành công! Đang chuyển hướng đến trang đăng nhập...");
      form.reset();
      window.location.href = "login.html"; // Chuyển đến trang đăng nhập
    }
  });

  function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
  }

  function clearErrors() {
    document
      .querySelectorAll(".error")
      .forEach((span) => (span.textContent = ""));
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
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
