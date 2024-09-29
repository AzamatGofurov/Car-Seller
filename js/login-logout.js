document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    // Foydalanuvchi login qilganligini localStorage orqali tekshiramiz
    const loggedInUser = localStorage.getItem('loggedInUser');
    
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

            const userEmail = document.getElementById('login-email').value;
            const userPassword = document.getElementById('login-password').value;

            // Simple example: checking email and password for demo purposes
            if (userEmail === 'user@example.com' && userPassword === 'password123') {
                const userName = userEmail.split('@')[0]; // Emaildan foydalanuvchi ismini olamiz
                localStorage.setItem('loggedInUser', userName); // Foydalanuvchi ismini saqlash
                window.location.href = "dashboard.html"; // Dashboard sahifasiga yo'naltiriladi
            } else {
                alert("Email yoki parol noto'g'ri");
            }
        });
    }

    // Registratsiya form submit bo'lganda
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const userName = document.getElementById('register-name').value;
            const userEmail = document.getElementById('register-email').value;
            const userPassword = document.getElementById('register-password').value;

            // Simple example: saving registered user details (you can enhance this logic)
            localStorage.setItem('registeredUserEmail', userEmail);
            localStorage.setItem('registeredUserPassword', userPassword);
            localStorage.setItem('loggedInUser', userName); // Foydalanuvchi ismini saqlash
            window.location.href = "dashboard.html"; // Dashboard sahifasiga yo'naltiriladi
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
