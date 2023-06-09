const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-transparent")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{ 
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

// auto typing
var texts = ["Hi, Welcome To My Website", "Have a Nice Day"]; // Array teks yang ingin ditampilkan
    var speed = 50; // Kecepatan pengetikan ,ilidetik
    var typingTextElement = document.getElementById("typing-text");
    var textIndex = 0;
    var charIndex = 0;

    function typeText() {
      if (charIndex < texts[textIndex].length) {
        typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
      } else {
        setTimeout(eraseText, speed);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        typingTextElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed);
      } else {
        textIndex++;
        if (textIndex >= texts.length) {
          textIndex = 0; // Reset indeks teks saat mencapai akhir array
        }
        setTimeout(typeText, speed);
      }
    }

    // Memulai pengetikan otomatis ketika halaman dimuat
    window.onload = typeText;
