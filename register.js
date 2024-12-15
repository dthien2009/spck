// Truy xuất các phần tử từ DOM
const registerForm = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Thêm sự kiện submit vào form
registerForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn form gửi đi mặc định

    // Lấy giá trị từ các ô input
    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    // Xóa thông báo lỗi trước đó
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    let isValid = true;

    // Kiểm tra tên đăng nhập
    if (usernameValue.length < 3) {
        document.getElementById("usernameError").textContent = "Username must be at least 3 characters long.";
        isValid = false;
    }

    // Kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        isValid = false;
    }

    // Kiểm tra mật khẩu
    if (passwordValue.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (passwordValue !== confirmPasswordValue) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    if (!isValid) {
        return; // Dừng nếu có lỗi
    }

    // Lấy danh sách người dùng đã lưu trong localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra nếu tên đăng nhập hoặc email đã tồn tại
    const isUserExists = users.some((user) => user.username === usernameValue || user.email === emailValue);
    if (isUserExists) {
        alert("Username or email already exists!");
        return;
    }

    // Tạo đối tượng lưu trữ thông tin người dùng
    const newUser = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
    };

    // Lưu thông tin người dùng vào localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Thông báo đăng ký thành công và chuyển đến trang đăng nhập
    alert("Registration successful!");
    window.location.href = "./login.html"; // Chuyển đến trang đăng nhập
});