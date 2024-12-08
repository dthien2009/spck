// Lấy form và các input
const form = document.getElementById('payment-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const paymentMethodInput = document.getElementById('payment-method');

// Lắng nghe sự kiện submit form
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    // Lấy giá trị từ các trường
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();
    const paymentMethod = paymentMethodInput.value;

    // Kiểm tra xem các trường đã được điền đầy đủ hay chưa
    if (!name || !email || !address || !paymentMethod) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    // Kiểm tra định dạng email (regex cơ bản)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Vui lòng nhập email hợp lệ!');
        return;
    }

    // Hiển thị thông báo thành công
    alert(`Cảm ơn ${name}, thanh toán của bạn đã được xử lý thành công!`);
    localStorage.removeItem('cart');
    // Chuyển hướng sang trang chủ
    window.location.href = "./home.html"; // Thay "index.html" bằng đường dẫn tới trang chủ của bạn
});