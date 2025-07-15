window.addEventListener("wheel", (event) => {
  const isScrollDown = event.deltaY > 0;

  const translateX = isScrollDown ? "-200%" : "0%";
  const rotate = isScrollDown ? 180 : 0;

  gsap.to(".marque", {
    transform: `translateX(${translateX})`,
    duration: 4,
    repeat: -1,
    ease: "none",
  });

  gsap.to(".marque img", {
    rotate: rotate,
  });
});
