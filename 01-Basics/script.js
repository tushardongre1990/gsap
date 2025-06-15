// gsap.to(".box1", {
//   x: 1000,
//   y: 300,
//   duration: 2,
//   delay: 1,
//   rotate: -360,
//   backgroundColor: "#578FCA",
//   borderRadius: "20%",
//   scale: 0.5,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inOut",
// });
// gsap.from(".box2", {
//   x: 500,
//   y: 200,
//   duration: 2,
//   delay: 1,
//   rotate: -420,
//   backgroundColor: "#0ABAB5",
//   borderRadius: "20%",
//   scale: 2,
//   repeat: -1, // repeats the animation infinite times
//   yoyo: true, // replays the animation in reverse
//   ease: "power1.inOut",
// });

// gsap.from("h1", {
//   duration: 3,
//   delay: 1,
//   opacity: 0,
//   stagger: 0.3,
// });

// Timeline

// gsap.to(".box1", {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "#0ABAB5",
//   borderRadius: "20%",
// });
// gsap.to(".box2", {
//   x: 500,
//   duration: 2,
//   delay: 3,
//   backgroundColor: "#B33791",
//   borderRadius: "30%",
//   scale: 0.5,
// });
// gsap.to(".box3", {
//   x: 500,
//   duration: 2,
//   delay: 5,
//   backgroundColor: "#FE5D26",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// to animate the elements in synchronous way we use timeline instead of calculating the time like we did above

let tl = gsap.timeline();

// tl.to(".box1", {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "#0ABAB5",
//   borderRadius: "20%",
// });
// we dont have to use delay in 2nd box as the elements will move synchronously i.e one after another in the order they are defined
// tl.to(".box3", {
//   x: 500,
//   duration: 2,
//   backgroundColor: "#FE5D26",
//   borderRadius: "50%",
//   scale: 0.5,
// });
// tl.to(".box2", {
//   x: 500,
//   duration: 2,
//   backgroundColor: "#B33791",
//   borderRadius: "30%",
//   scale: 0.5,
// });

// Navbar Animation

tl.from("h2", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 2,
});
