document.addEventListener("DOMContentLoaded", function() {
    feather.replace(); // Initialize Feather icons on page load

    let menuIcon = document.querySelector('#menu-icon');
    let closeIcon = document.querySelector('#close-icon'); // Tambahkan elemen baru untuk ikon X
    let navbarr = document.querySelector('.custom-navbar');

    menuIcon.addEventListener('click', function() {
        menuIcon.style.display = 'none'; // Sembunyikan ikon menu
        closeIcon.style.display = 'block'; // Tampilkan ikon X
        navbarr.classList.toggle('active'); // Toggle navbar visibility
    });

    closeIcon.addEventListener('click', function() {
        closeIcon.style.display = 'none'; // Sembunyikan ikon X
        menuIcon.style.display = 'block'; // Tampilkan ikon menu
        navbarr.classList.toggle('active'); // Toggle navbar visibility
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('.multiple-text', {
        strings: [ 'BSI  Fatmawati' , 'BSI  Ciledug', 'BSI  Jatiwaringin ','BSI  Dewi Sartika A' , 'BSI  Dewi Sartika B' ,
        'BSI Pemuda', 'BSI Kalimalang' ,'BSI Cengkareng','BSI Slipi','BSI Tangerang','BSI Bsd','BSI Ciputat',
        'BSI Margonda','BSI Cut Mutiah','BSI Kaliabang','BSI Cibitung','BSI Cikarang','BSI Bogor','BSI Cilebut',
        'BSI Karawang','BSI Cikampek','BSI Sukabumi','BSI Sukabummi Veteran','BSI Tasik Malaya','BSI Tegal',
        'BSI Purwokerto', 'BSI Yogyakarta','BSI Surakarta','BSI Pontianak','BSI Wisma'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 80,
        loop: true
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.custom-navbar a');
    const currentUrl = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});









document.addEventListener("DOMContentLoaded", function() {
    // Menambahkan animasi fade-in saat halaman dimuat
    document.body.classList.add('fade-in');

    // Menangkap semua klik pada link
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah link bekerja secara default
            const href = this.getAttribute('href');

            // Menambahkan animasi fade-out
            document.body.classList.add('fade-out');

            // Menunggu animasi selesai, lalu pindah halaman
            setTimeout(() => {
                window.location.href = href;
            }, 50); // 500 ms sesuai durasi animasi fadeOut
        });
    });
});
