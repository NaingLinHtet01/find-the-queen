const btn_start = document.querySelector(".g-start");
const btn_reload = document.querySelector(".g-reload");
let card = document.querySelectorAll(".card");
let q_card = document.querySelectorAll(".qcard");
let n1 = 350;
let n2 = 350;
let label = document.querySelector(".label-sty");
let label_w = document.querySelector(".win");
let label_l = document.querySelector(".lose");

// sounds
const flip = new Audio("sub/sounds/flip.mp3");
const win = new Audio("sub/sounds/win.wav");
const lose = new Audio("sub/sounds/fail.wav");
const startup = new Audio("sub/sounds/start.wav");
const click_sound = new Audio("sub/sounds/click4.ogg");

let animate_stop = () => {
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove("rotation");
  }
};

let control = 0;
let wined = 0;

btn_start.addEventListener("click", function () {
  if (control == 0) {
    startup.currentTime = 0;
    startup.play();
    for (let i = 0; i < card.length; i++) {
      animate_stop();
      setTimeout(function () {
        card[i].classList.remove("start-pos");
        q_card[i].classList.add("emt");
        flip.currentTime = 0;
        flip.play();
      }, 500 * i);
    }
    setTimeout(function () {
      label.classList.remove("label");
    }, 3000);

    // Random
    let num = Math.floor(Math.random() * 6);
    console.log(num);
    console.log(q_card[num]);
    q_card[num].style.display = "block";

    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", function () {
        card[i].classList.toggle("flip");
        if (num == i) {
          win.currentTime = 0;
          win.play();
          label.classList.add("label");
          label_w.classList.remove("label");
          card[0].classList.toggle("flip");
          card[1].classList.toggle("flip");
          card[2].classList.toggle("flip");
          card[3].classList.toggle("flip");
          card[4].classList.toggle("flip");
          card[5].classList.toggle("flip");
          card[i].classList.toggle("flip");
          control++;
          wined++;
        } else {
          if (wined == 0) {
            lose.currentTime = 0;
            lose.play();
            label.classList.add("label");
            label_l.classList.remove("label");
          } else {
            win.currentTime = 0;
            win.play();
          }
          card[0].classList.toggle("flip");
          card[1].classList.toggle("flip");
          card[2].classList.toggle("flip");
          card[3].classList.toggle("flip");
          card[4].classList.toggle("flip");
          card[5].classList.toggle("flip");
          card[i].classList.toggle("flip");
          control++;
          num = num + 10;
        }
      });
    }
  } else {
    location.reload();
  }
});

document.body.addEventListener("click", function () {
  click_sound.currentTime = 0;
  click_sound.play();
});
