// Login holatini tekshirish funksiyasi
function checkLoginStatus() {
  const loggedInUser = localStorage.getItem('loggedInUser'); // LocalStorage'dan login qilgan foydalanuvchini tekshirish

  if (!loggedInUser) {  // Agar login qilmagan bo'lsa
      document.getElementById('login-modal').classList.add('show');  // Login qilmagan bo'lsa, modal oynani ko'rsatish
  }
}

// Login sahifasiga yo'naltirish funksiyasi
function redirectToLogin() {
  window.location.href = 'login.html';  // Login sahifasiga yo'naltirish
}

// E'lon qo'shish formasi submit qilinganda muvaffaqiyatli e'lon haqida xabar
function handleFormSubmit(event) {
  event.preventDefault();  // Formani submit qilishni to'xtatish

  // Foydalanuvchi login qilganini tekshirish
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
      alert("Iltimos, login qiling.");
      redirectToLogin(); // Agar login qilmagan bo'lsa, login sahifasiga yo'naltirish
      return;
  }

  // E'lon qo'shish uchun ma'lumotlarni tekshirish
  const carModel = document.getElementById('model').value;
  const carYear = document.getElementById('year').value;
  const carPrice = document.getElementById('price').value;

  if (!carModel || !carYear || !carPrice) {
      alert('Barcha maydonlarni to\'ldiring.');
      return;
  }

  // Muvaffaqiyatli e'lon qo'shildi xabarini ko'rsatish
  document.getElementById('success-modal').classList.add('show');
}

// Modalni yopish funksiyasi
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('show');
}

// Sahifa yuklanayotganda login holatini tekshirish
window.onload = checkLoginStatus;
