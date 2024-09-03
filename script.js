const btnConfirmar = document.querySelector("#confirm-button");
const infoCard = document.querySelector("#info-card");
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const checkSim = document.querySelector("#checkSim");
const checkNao = document.querySelector("#checkNao");
const accompanyNumberBlock = document.querySelector("#accompany-number-block");
const accompanyNumberInput = document.querySelector("#accompany-number");
const errorMessage = document.querySelector("#error-message");

btnConfirmar.addEventListener("click", (event) => {
  event.preventDefault();
  infoCard.classList.add("hidden");
  form1.classList.remove("hidden");
});

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();

  console.log("Nome:", name);
  form1.classList.add("form-hide");
});

form1.addEventListener("animationend", (event) => {
  if (event.animationName === "down") {
    form1.style.display = "none";
    form2.classList.remove("hidden");
    form2.style.animation = "fade 0.5s"; // Ajuste para aparecer mais rápido
  }
});

checkSim.addEventListener("change", (event) => {
  if (event.target.checked) {
    accompanyNumberBlock.classList.remove("hidden");
    checkNao.checked = false;
  } else {
    accompanyNumberBlock.classList.add("hidden");
    errorMessage.classList.add("hidden");
  }
});

checkNao.addEventListener("change", (event) => {
  if (event.target.checked) {
    accompanyNumberBlock.classList.add("hidden");
    checkSim.checked = false;
    errorMessage.classList.add("hidden");
  }
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!checkSim.checked && !checkNao.checked) {
    form2.classList.add("validate-error");
    form2.addEventListener("animationend", (event) => {
      if (event.animationName === "nono") {
        form2.classList.remove("validate-error");
      }
    });
    alert("Por favor, selecione se deseja levar acompanhante.");
    return;
  }

  const accompanyNumber = parseInt(accompanyNumberInput.value, 10);

  if (checkSim.checked && accompanyNumber > 5) {
    form2.classList.add("validate-error");
    errorMessage.classList.remove("hidden");
    form2.addEventListener("animationend", (event) => {
      if (event.animationName === "nono") {
        form2.classList.remove("validate-error");
      }
    });
  } else {
    errorMessage.classList.add("hidden");
    alert("Conto com a sua presença!");
  }
});

/* background squares */
const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(0.25, 0.1, 0.25, 1)`; // Ajuste dos valores

  ulSquares.appendChild(li);
}
