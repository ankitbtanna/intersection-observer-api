const visibility = document.getElementById("visibility");

const element = document.getElementById("target");

const io = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      console.log("Element is fully visible in screen");
      visibility.innerHTML = "Element is Visible";
      visibility.classList.add("visible");
    } else {
      console.log("Element is not fully visible in screen");
      visibility.innerHTML = "Element is not Visible";
      visibility.classList.remove("visible");
    }
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }
);

io.observe(element);
