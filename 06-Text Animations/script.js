function breakTheText() {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;

  const splittedText = h1Text.split("");

  let clutter = "";

  splittedText.map((element, index) => {
    console.log(element, index);

    const className = index % 2 === 0 ? "even" : "odd";
    const charToDisplay = element === " " ? "&nbsp;" : element;
    clutter += `<span class="${className}">${charToDisplay}</span>`;
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .even", {
  y: 100,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});
gsap.from("h1 .odd", {
  y: 100,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: -0.3,
});
