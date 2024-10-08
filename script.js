let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.classList.remove('visible');
      } else {
        // Scroll up
        navbar.classList.add('visible');
      }

      lastScrollTop = scrollTop;
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#76ABAE"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#76ABAE",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 100,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 100,
            "size": 10,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');

    // Fungsi untuk membuka atau menutup sidebar
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      hamburger.classList.toggle('hidden'); // Sembunyikan hamburger saat sidebar aktif
    });

    // Fungsi untuk menutup sidebar dan memunculkan hamburger saat klik di luar sidebar
    document.addEventListener('click', function(event) {
      if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('hidden'); // Munculkan kembali hamburger saat sidebar tertutup
      }
    });


    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
    
    document.onkeydown = function(e) {
      if (e.keyCode == 123) { // Disable F12
        return false;
      }
    };

     // Ambil semua link navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    const workGrids = document.querySelectorAll('.work-grid');

    // Fungsi untuk mengganti konten sesuai kategori yang diklik
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();  // Mencegah aksi default

        // Hilangkan 'active' dari semua link dan tambahkan ke link yang diklik
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // Sembunyikan semua grid dengan efek fade
        workGrids.forEach(grid => {
          if (grid.id === this.getAttribute('data-category')) {
            grid.classList.remove('fade'); // Remove fade class for showing
            grid.classList.add('fade-in'); // Add fade-in class for the selected grid
            grid.style.display = 'grid'; // Show the selected grid
          } else {
            grid.classList.remove('fade-in'); // Remove fade-in class
            grid.classList.add('fade'); // Add fade class for hiding
            setTimeout(() => {
              grid.style.display = 'none'; // Hide the grid after fading out
            }, 500); // Match this duration to the CSS transition duration
          }
        });
      });
    });

    function openModal(imageSrc) {
      console.log("Modal opened with image:", imageSrc); // Tambahkan ini untuk debug
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      modalImage.src = imageSrc; // Set the image source
      modal.style.display = 'flex'; // Show the modal
    }

    function closeModal() {
      console.log("Modal closed"); // Tambahkan ini untuk debug
      const modal = document.getElementById('imageModal');
      modal.style.display = 'none'; // Hide the modal
    }
    
    // Fade-in effect for hero content
    window.addEventListener('DOMContentLoaded', function () {
      document.querySelector('.hero-content').classList.add('show');
    });

    const phrases = [
      "Saya seorang",           // Bahasa Indonesia
      "I am a",                // Bahasa Inggris
      "Soy un",                // Bahasa Spanyol
      "Je suis un",            // Bahasa Prancis
      "Ich bin ein",           // Bahasa Jerman
      "Watashi wa",            // Bahasa Jepang
      "Eu sou um",            // Bahasa Portugis
      "Jeg er en",            // Bahasa Denmark
      "Ik ben een",           // Bahasa Belanda
      "Я -",                  // Bahasa Rusia (dapat diikuti dengan kata yang sesuai)
      "我是一个",              // Bahasa Mandarin (pinyin: Wǒ shì yīgè)
      "أنا",                  // Bahasa Arab (dapat diikuti dengan kata yang sesuai)
      "मैं एक हूँ",            // Bahasa Hindi (pinyin: Main ek hoon)
      "Jsem",                 // Bahasa Ceko
      "Ben bir",              // Bahasa Turki


  ];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  const typingText = document.getElementById("typingText");
  
  function type() {
      if (currentCharIndex < phrases[currentPhraseIndex].length) {
          typingText.textContent += phrases[currentPhraseIndex][currentCharIndex];
          currentCharIndex++;
          setTimeout(type, 100); // Durasi mengetik
      } else {
          setTimeout(deleteText, 1000); // Tunggu sebelum menghapus
      }
  }
  
  function deleteText() {
      if (currentCharIndex > 0) {
          typingText.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
          currentCharIndex--;
          setTimeout(deleteText, 50); // Durasi menghapus
      } else {
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Pindah ke frase berikutnya
          setTimeout(type, 500); // Tunggu sebelum mengetik lagi
      }
  }
  
  // Mulai animasi
  type();
  