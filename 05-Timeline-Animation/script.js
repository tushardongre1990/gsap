const menu = document.querySelector("#nav span");
const close = document.querySelector("#full span");

const tl = gsap.timeline();

tl.to("#full", {
  right: "0",
  duration: 1,
});

tl.from("#full h4", {
  x: 350,
  duration: 0.7,
  stagger: 0.3,
  opacity: 0,
});

tl.from("#full span", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
