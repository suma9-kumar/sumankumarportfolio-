

  window.onload = function () {
    document.getElementById("customAlert").style.display = "block";
  };

  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
  };





var typed = new Typed(".text", {
    strings:["Video editor", "thumbnail designer" , "Freelancer","youtuber" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click",()=>{
  ul.classList.toggle("showData");
  if(ul.className == "showData"){
    document.getElementById("bar").className="fa-solid fa-xmark";
  }
  else{
    document.getElementById("bar").className="fa-solid fa-bars";
  }
})
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 30) {
      $('header').addClass('header-active');
    } else {
      $('header').removeClass('header-active');
    }

  });
gsap.registerPlugin(ScrollTrigger);

gsap.to(".home", {
  scrollTrigger: {
    trigger: ".home",
    start: "top 80%",   // jab section screen me aaye
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out"
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",   // jab section screen me aaye
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".servicecontent", {
  scrollTrigger: {
    trigger: ".Service",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"

});
gsap.from(".video1", {
  scrollTrigger: {
    trigger: ".servicecontent",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.9,
  stagger: 0.3,
  ease: "power3.out"

});

gsap.from(".content", {
  scrollTrigger: {
    trigger: ".content",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from("video", {
  scrollTrigger: {
    trigger: ".content",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".img1" ,{
  scrollTrigger: {
    trigger: ".thumbnail",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".img2" ,{
  scrollTrigger: {
    trigger: ".thumbnail",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

gsap.from(".testimonialcontent" ,{
  scrollTrigger: {
    trigger: ".Testimonial",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
gsap.from(".reviews" ,{
  scrollTrigger: {
    trigger: ".test",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".form" ,{
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".formcontainer" ,{
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
  },
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
gsap.from("input" ,{
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
  },
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
gsap.from("textarea" ,{
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
  },
  y: -50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2
});
gsap.from(".endtopic" ,{
  scrollTrigger: {
    trigger: ".end",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".paragraph" ,{
  scrollTrigger: {
    trigger: ".end",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".shortcut" ,{
  scrollTrigger: {
    trigger: ".end",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 1.3,
  stagger: 0.3
});
gsap.from(".shares" ,{
  scrollTrigger: {
    trigger: ".end",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.8
});
gsap.from(".shortcut1" ,{
  scrollTrigger: {
    trigger: ".end",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3
});
gsap.from(".shares1" ,{
  scrollTrigger: {
    trigger: ".end",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".credit" ,{
  scrollTrigger: {
    trigger: ".creditme",
    start: "top 90%",
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".fa-facebook-f" ,{
  scrollTrigger: {
    trigger: ".home",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.from(".fa-youtube" ,{
  scrollTrigger: {
    trigger: ".home",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2
});
gsap.from(".fa-instagram" ,{
  scrollTrigger: {
    trigger: ".home",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  duration: 1.7,
  stagger: 0.3
});
gsap.from(".fa-whatsapp" ,{
  scrollTrigger: {
    trigger: ".home",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  duration: 2,
  stagger: 0.4
});
gsap.from(".fa-linkedin" ,{
  scrollTrigger: {
    trigger: ".home",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  duration: 2.1,
  stagger: 0.4
});
gsap.from(".img" ,{
  scrollTrigger: {
    trigger: ".home",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.8
});
gsap.from(".ok" ,{
  scrollTrigger: {
    trigger: ".customAlert",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.8
});
