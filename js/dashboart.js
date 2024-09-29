// Display user ads or no-ads message
document.addEventListener("DOMContentLoaded", function() {
  const adsList = document.getElementById('ads-list');
  const noAdsMessage = document.getElementById('no-ads-message');

  const userAds = []; // This should be dynamically filled

  if (userAds.length > 0) {
    noAdsMessage.style.display = 'none';
    userAds.forEach(ad => {
      const adCard = document.createElement('div');
      adCard.classList.add('ad-card');
      adCard.innerHTML = `
        <h3>${ad.model}</h3>
        <p><strong>Yili:</strong> ${ad.year}</p>
        <p><strong>Narxi:</strong> $${ad.price}</p>
        <p><strong>Holati:</strong> ${ad.status}</p>
      `;
      adsList.appendChild(adCard);
    });
  } else {
    noAdsMessage.style.display = 'block';
  }
});

// Open admin modal
function openAdminModal() {
const modal = document.getElementById('admin-modal');
modal.style.display = 'block';
}

// Close admin modal
function closeAdminModal() {
const modal = document.getElementById('admin-modal');
modal.style.display = 'none';
}

// Handle admin contact form submission
document.getElementById('admin-contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Formni odatdagi jo'natishdan saqlash

  const message = document.getElementById('message').value;
  const contact = document.getElementById('contact').value;
  const successMessage = document.getElementById('success-message');

  // Simple validation check
  if (message && contact) {
      // Xabar muvaffaqiyatli jo'natilgandan so'ng, alertni qo'shamiz:
      alert("Xabaringiz jo'natildi. 24 soat ichida javob olasiz.");
      
      // Xabar muvaffaqiyatli jo'natildi bildirishnomasi
      successMessage.classList.remove('hidden');
      successMessage.classList.add('show');
      
      // Formani tozalash
      document.getElementById('admin-contact-form').reset();

      // Modal oynani yopish
      closeModal();

      // Bildirishnomani 5 sekunddan so'ng o'chirish
      setTimeout(function () {
          successMessage.classList.remove('show');
          successMessage.classList.add('hidden');
      }, 5000);
  } else {
      alert("Iltimos, barcha maydonlarni to'ldiring."); // Foydalanuvchi ma'lumotlari to'ldirilmagan bo'lsa xabar chiqadi
  }
});
