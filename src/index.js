const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

let card1;
let card2;
let cardCounter = 0;

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      card.classList.toggle("turned");
      cardCounter++;
      if (cardCounter === 1) {
        card1 = card;
      } else if (cardCounter === 2) {
        card2 = card;
        if (
          memoryGame.checkIfPair(
            card1.getAttribute("data-card-name"),
            card2.getAttribute("data-card-name")
          ) === true
        ) {
          cardCounter = 0;
          setTimeout(() => {
            alert("Match!!!");
          }, 1000);
        } else {
          setTimeout(() => {
            card1.classList.toggle("turned");
            card2.classList.toggle("turned");
            cardCounter = 0;
          }, 1000);
        }
        updatingScore();
        updatingGuessed();
        userWon();
      }
    });
  });
});
function updatingScore() {
  document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked;
}

function updatingGuessed() {
  document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed;
}

function userWon() {
  if (memoryGame.checkIfFinished()) alert("You Won the Memory Game. Good Job");
}
