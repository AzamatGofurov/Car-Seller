// Sektsiyalarni almashtirish uchun JavaScript
function switchToRegister() {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('register-section').classList.remove('hidden');
}

function switchToLogin() {
    document.getElementById('register-section').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    // Foydalanuvchi login qilganligini localStorage orqali tekshiramiz
    const loggedInUser = localStorage.getItem('loggedInUser');
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || []; // Ro'yxatdan o'tgan foydalanuvchilarni olish

    if (loggedInUser) {
        // Agar foydalanuvchi login qilgan bo'lsa, "Login" tugmasi foydalanuvchi ismi bilan almashtiriladi
        loginLink.innerHTML = `<ion-icon name="person-circle-outline" class="mr-1"></ion-icon> ${loggedInUser}`;
        loginLink.href = "dashboard.html"; // Login bo'limi dashboardga yo'naltiriladi
        logoutLink.style.display = 'inline'; // Logout linki ko'rsatiladi
    } else {
        // Agar login qilmagan bo'lsa, login sahifasiga yo'naltiriladi
        loginLink.href = "login.html";
        logoutLink.style.display = 'none'; // Logout ko'rinmaydi
    }

    // Login form submit bo'lganda
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const emailError = document.getElementById('login-email-error');
            const passwordError = document.getElementById('login-password-error');
            const successMessage = document.getElementById('login-success-message');
            
            // Xatoliklarni tozalash
            emailError.textContent = '';
            passwordError.textContent = '';
            successMessage.textContent = '';

            // Ro'yxatdan o'tgan foydalanuvchi bormi, deb tekshirish
            const user = registeredUsers.find(user => user.email === email && user.password === password);

            if (user && user.password === password) {
                // Agar email va parol to'g'ri bo'lsa
                successMessage.textContent = 'Muvaffaqiyatli login qilindi';
                successMessage.classList.add('show-success');
                localStorage.setItem('loggedInUser', user.name); // Foydalanuvchi ismi saqlash
                setTimeout(() => {
                    window.location.href = "dashboard.html"; // Dashboard sahifasiga yo'naltiriladi
                }, 1500);
            } else {
                // Agar noto'g'ri bo'lsa
                showAlert('error', 'Email yoki parol noto‘g‘ri');
            }
        });
    }

    // Registratsiya form submit bo'lganda
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            const nameError = document.getElementById('register-name-error');
            const emailError = document.getElementById('register-email-error');
            const passwordError = document.getElementById('register-password-error');
            const successMessage = document.getElementById('register-success-message');

            // Xatoliklarni tozalash
            nameError.textContent = '';
            emailError.textContent = '';
            passwordError.textContent = '';
            successMessage.textContent = '';

            // Oddiy validatsiya
            let hasError = false;
            if (!name) {
                nameError.textContent = 'Ismingizni kiriting';
                nameError.classList.add('show-error');
                hasError = true;
            }

            if (!email || !validateEmail(email)) {
                emailError.textContent = 'To\'g\'ri email kiriting';
                emailError.classList.add('show-error');
                hasError = true;
            }

            if (!password || password.length < 6) {
                passwordError.textContent = 'Parolingiz kamida 6 ta belgidan iborat bo\'lishi kerak';
                passwordError.classList.add('show-error');
                hasError = true;
            }

            // Agar xatolar bo'lmasa, foydalanuvchini saqlash
            if (!hasError) {
                const userExists = registeredUsers.some(user => user.email === email);
                
                if (userExists) {
                    showAlert('error', 'Bu email allaqachon mavjud');
                } else {
                    registeredUsers.push({ name, email, password });
                    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

                    showAlert('success', 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz');
                    localStorage.setItem('loggedInUser', name); // Foydalanuvchi ismi saqlash
                    setTimeout(() => {
                        window.location.href = "dashboard.html"; // Dashboard sahifasiga yo'naltiriladi
                    }, 1500);
                }
            }
        });
    }

    // Logout funksiyasi
    if (logoutLink) {
        logoutLink.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('loggedInUser'); // Foydalanuvchi ma'lumotlari o'chiriladi
            window.location.href = "index.html"; // Bosh sahifaga yo'naltiriladi
        });
    }
});

// Emailni tekshirish funksiyasi
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Custom alert funksiyasi
function showAlert(type, message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('custom-alert', `alert-${type}`);
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add('fade-out');
        setTimeout(() => alertBox.remove(), 500); // 500ms after fade-out, remove the alert
    }, 3000); // 3 seconds before fading out
}
