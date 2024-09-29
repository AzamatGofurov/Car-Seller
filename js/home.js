// JavaScript to handle which section is active and toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = window.location.href;
  
    // Get all navbar links
    const navbarLinks = document.querySelectorAll('.navbar-link');
  
    // Loop through navbar links to find the one that matches the current URL
    navbarLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      // Check if the link matches the current URL
      if (currentLocation.includes(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  
    // Mobile menu toggle functionality
    const menuIcon = document.querySelector('.menu-icon');
    const navbarList = document.querySelector('.navbar-list');
  
    menuIcon.addEventListener('click', () => {
      navbarList.classList.toggle('open');
    });
  });
  

// Toggle filter options visibility
const filterToggleBtn = document.getElementById('filterToggleBtn');
const filterOptions = document.getElementById('filterOptions');

filterToggleBtn.addEventListener('click', () => {
  filterOptions.classList.toggle('open');
});

// Update price display dynamically
const priceInput = document.getElementById('price');
const priceDisplay = document.getElementById('priceDisplay');

priceInput.addEventListener('input', () => {
  priceDisplay.textContent = `$${parseInt(priceInput.value).toLocaleString()}`;
});


// Navbar linklarining barchasini olish
const navbarLinks = document.querySelectorAll('.navbar-link');

// Har bir link uchun click hodisasini eshitish
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Hamma linklardan "active" klassini olib tashlash
    navbarLinks.forEach(link => link.classList.remove('active'));
    
    // Faqat bosilgan linkka "active" klassini qo'shish
    this.classList.add('active');
  });
});


// Like icon ustiga bosilganda like sonini oshirish
const likeIcons = document.querySelectorAll('.like-icon');
likeIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const likeCount = icon.nextElementSibling;
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
    icon.classList.add('liked');
  });
});

// Hidden ma'lumotlarni ochish/tugma bosilganda ko'rsatish
function toggleCardDetails(button) {
  const details = button.previousElementSibling; // Button oldidagi hidden-details qismi

  if (!details.classList.contains('open')) {
    details.classList.add('open'); // Ko'rsatish
    button.textContent = "Ma'lumotlarni yashirish"; // Tugma matnini o'zgartirish
  } else {
    details.classList.remove('open'); // Yashirish
    button.textContent = "To'liq ma'lumot"; // Tugma matnini asl holatiga qaytarish
  }
}



// Swiper.js uchun script
const swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


