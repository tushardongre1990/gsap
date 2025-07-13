const main = document.querySelector("#main");

const cursor = document.querySelector("#cursor");

const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
    // ease: "back.out(1.4)",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";

  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#faf8b8",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
