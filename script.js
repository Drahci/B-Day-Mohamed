const btnLogin = document.querySelector("#form1 .btn-login");
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const accompanyCheckbox = document.querySelector("#accompany");
const accompanyNumberBlock = document.querySelector("#accompany-number-block");
const accompanyNumberInput = document.querySelector("#accompany-number");
const errorMessage = document.querySelector("#error-message");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  const nameField = document.querySelector("#name");
  const name = nameField.value.trim();

  if (name === "") {
    form1.classList.add("validate-error");
  } else {
    form1.classList.add("form-hide");
  }

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", (event) => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  }
});

form1.addEventListener("animationend", (event) => {
  if (event.animationName === "down") {
    form1.style.display = "none";
    form2.classList.remove("hidden");
    form2.style.animation = "fade 0.5s"; // Ajuste para aparecer mais rápido
  }
});

accompanyCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    accompanyNumberBlock.classList.remove("hidden");
  } else {
    accompanyNumberBlock.classList.add("hidden");
    errorMessage.classList.add("hidden");
  }
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const accompanyNumber = parseInt(accompanyNumberInput.value, 10);

  if (accompanyNumber > 5) {
    form2.classList.add("validate-error");
    errorMessage.classList.remove("hidden");
    form2.addEventListener("animationend", (event) => {
      if (event.animationName === "nono") {
        form2.classList.remove("validate-error");
      }
    });
  } else {
    errorMessage.classList.add("hidden");
    alert("Formulário enviado com sucesso!");
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
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(li);
}
