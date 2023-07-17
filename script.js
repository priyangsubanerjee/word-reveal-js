let container = document.querySelector("p");
let text = container.innerText;
let arrayPrimary = text.split(" ");

container.innerText = "";

for (let i = 0; i < arrayPrimary.length; i++) {
  let span = document.createElement("span");
  span.innerText = arrayPrimary[i] + " ";
  span.classList.add("word");
  container.appendChild(span);
}

window.addEventListener("scroll", () => {
  let words = document.querySelectorAll(".word");
  let containerHeight = container.getBoundingClientRect().height;
  console.log(containerHeight);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (
      i <
      (document.documentElement.scrollTop / containerHeight) * words.length
    ) {
      word.classList.add("active");
    } else {
      word.classList.remove("active");
    }
  }
});
