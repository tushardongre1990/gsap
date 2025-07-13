// This is the initial path of the SVG curve (a quadratic Bezier curve).
// It starts at (10, 100), has a control point at (500, 100), and ends at (990, 100).
// This gives us a straight horizontal curve.
let initialPath = `M 10 100 Q 500 100 990 100`;

// This is the final path we want the curve to return to when the mouse leaves the area.
// In this case, it's the same as the initial path (a flat line).
let finalPath = `M 10 100 Q 500 100 990 100`;

// We select the element with ID 'string'.
// This is the element we will listen for mouse movement events on.
let string = document.querySelector("#string");

// When the mouse moves over the element with ID 'string'...
string.addEventListener("mousemove", (dets) => {
  // We dynamically update the SVG path to follow the mouse's x and y positions.
  // `dets.x` and `dets.y` represent the current mouse coordinates within the viewport.
  // We use the mouse position as the control point of the Bezier curve.
  initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

  // We use GSAP to animate the 'd' attribute of the SVG path element.
  // 'd' defines the shape of the SVG path. We smoothly transition to the new shape.
  gsap.to("svg path", {
    attr: {
      d: initialPath, // Apply the new dynamic path
    },
    duration: 0.2, // Animation lasts for 0.2 seconds
    ease: "power3.out", // Easing function for smooth animation
  });
});

// When the mouse leaves the element with ID 'string'...
string.addEventListener("mouseleave", () => {
  // Animate the SVG path back to the original straight line.
  gsap.to("svg path", {
    attr: {
      d: finalPath, // Reset to the original path
    },
    duration: 1.5, // Animation lasts for 1.5 seconds
    ease: "elastic.out(1,0.1)", // Easing function that gives a spring-like bounce
  });
});
