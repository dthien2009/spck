// Truy xuất các phần tử từ DOM
const usernameInput = document.getElementById("username"); // Input tên đăng nhập
const passwordInput = document.getElementById("password"); // Input mật khẩu
const loginForm = document.getElementById("loginForm"); // Form đăng nhập

// Xử lý sự kiện submit của form
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn hành vi mặc định của form

    // Lấy giá trị từ các ô input
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Lấy thông tin tài khoản từ localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // Lấy danh sách tài khoản
    const user = storedUsers.find(
        (user) => user.username === usernameValue && user.password === passwordValue
    );

    // Kiểm tra thông tin đăng nhập
    if (user) {
        alert("Login successful!");
        // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
        window.location.href = "./home.html"; // Trang chủ sau khi đăng nhập
    } else {
        alert("Incorrect username or password!");
    }
});