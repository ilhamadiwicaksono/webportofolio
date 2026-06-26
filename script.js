// ========================================================
// 1. EFEK TEKS BERUBAH-UBAH (TYPING EFFECT)
// ========================================================
const words = ["programmer.", "akuntan.", "data analyst."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetTextElement = document.getElementById("changing-text");

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        targetTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        targetTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", typeEffect);


// ========================================================
// 2. SISTEM PERPINDAHAN LAYOUT & DROPDOWN NAVIGASI
// ========================================================
const menuToggle = document.getElementById('menuToggle');
const navDropdown = document.getElementById('navDropdown');
const menuItems = document.querySelectorAll('.menu-item');
const pageSheets = document.querySelectorAll('.page-sheet');

// Buka/Tutup dropdown menu 3 garis
menuToggle.addEventListener('click', () => {
    navDropdown.classList.toggle('active');
});

// Logika Klik Menu ganti Halaman seketika (System Tab)
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah melompat default hashtag
        
        const targetPageId = item.getAttribute('data-target');
        
        // Sembunyikan semua halaman dengan menghapus class active
        pageSheets.forEach(sheet => {
            sheet.classList.remove('active');
        });
        
        // Munculkan halaman yang dituju dengan menambahkan class active
        const targetSheet = document.getElementById(targetPageId);
        if (targetSheet) {
            targetSheet.classList.add('active');
        }
        
        // Tutup dropdown menu setelah diklik
        navDropdown.classList.remove('active');
    });
});