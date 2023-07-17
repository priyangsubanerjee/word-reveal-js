let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum dolores ad iusto tempora veritatis. Beatae tempora fuga eveniet porro velit, saepe iste rerum similique ad exercitationem, voluptate ipsa sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum dolores ad iusto tempora veritatis. Beatae tempora fuga eveniet porro velit, saepe iste rerum similique ad exercitationem, voluptate ipsa sequi.`;
let arrayPrimary = text.split(" ");

let container = document.querySelector("p");

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
