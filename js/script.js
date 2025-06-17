// alert('tes')

document.addEventListener("DOMContentLoaded", () => {
  // alert('coba');
  AOS.init();
});

let toggleBtn = document.querySelector(".toggle_btn");
let toggleBtnIcon = document.querySelector(".toggle_btn i");
let dropDownMenu = document.querySelector(".dropdown_menu");
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log($(document).scrollTop());

  // custom navbar onscroll
  if ($(document).scrollTop() > 930) {
    $("header").addClass("fixed-top");
    $("header").css({
      "background-color": "#000",
      transition: "background-color 1s ease-in-out",
    });
  } else {
    $("header").removeClass("fixed-top");
    $("header").css({ "background-color": "", transition: "" });
  }
  // end custom

  // text.style.marginTop = value * 2.5 + 'px';
});

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");

  let isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// TYPERWRITE
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// end TYPERWRITE

//icon
$("i").hover(
  function () {
    $(this).addClass("fa-beat");
  },
  function () {
    $(this).removeClass("fa-beat");
  }
);
// end icon

//magnificPopup
$(".zoom-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
  zoom: {
    enabled: true,
    duration: 500,
    transition: "ease-in-out",
  },
});
