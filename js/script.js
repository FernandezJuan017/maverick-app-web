//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);

      //change logo
      var logo = document.querySelector(".brand img");
      if (window.scrollY>0) {
          logo.setAttribute('src', '/assets/images/logo2.jpg');
      }else{
          logo.setAttribute('src', '/assets/images/logo2.jpg');
      }

  });

  //javascript for responsive navigation sidebar menu
  let menu = document.querySelector('.menu');
  let menuBtn = document.querySelector('.menu-btn');
  let closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });