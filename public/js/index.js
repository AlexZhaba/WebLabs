// burger
let isFirstClick = true;
document.getElementById("burger").addEventListener("click", function() {
  document.getElementsByTagName("body").item(0).classList.toggle("body--fixed");
  if (!isFirstClick) {
    this.classList.toggle("burger-closed");
  } else isFirstClick = false;
  this.classList.toggle("burger-open");
  if (document.getElementById("header__menu").classList.contains("header__menu--mobile")) {
    document.getElementById("header__menu").classList.add("header__menu--removing")
    setTimeout(() => {
      document.getElementById("header__menu").classList.remove("header__menu--removing")
      document.getElementById("header__menu").classList.toggle("header__menu--mobile");
    }, 200);
  } else document.getElementById("header__menu").classList.toggle("header__menu--mobile");
})


const accButtons = [...document.getElementsByClassName("accordeon__button")];

accButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    console.log(this.dataset.for);
    if (!document.getElementById(this.dataset.for).classList.contains("accordeon__body--opened")) {
      document.getElementById(this.dataset.for).style.height = `${document.getElementById(this.dataset.for).children[0].offsetHeight + 20}px`;
    } else {
      document.getElementById(this.dataset.for).style.height = `0px`;
    }
    document.getElementById(this.dataset.for).classList.toggle("accordeon__body--opened");
  })
})


const message = {
  name: "AlexZhaba",
  message: "Prod by me with love <3"
}

document.getElementById("toast__title").innerText = message.name;
document.getElementById("toast__body").innerText = message.message;

setTimeout(() => {
  document.getElementById("toast").classList.add("toast--show");
  document.getElementById("toast__close").addEventListener("click", function() {
    document.getElementById("toast").classList.remove("toast--show");
  })
}, 2000);


// modals
const modal = document.getElementById("modal");

modal.addEventListener("click", () => {
  modal.classList.remove("modal--open");
  document.getElementsByTagName("body").item(0).classList.remove("body--fixed");
});
document.getElementById("modal__container").addEventListener("click", (event) => event.stopPropagation())

document.getElementById("modal-contact").addEventListener('click', function() {
  modal.classList.add("modal--open");
  document.getElementsByTagName("body").item(0).classList.add("body--fixed");
});


// modal-form

function checkValidation(input) {
  console.log("chekvalidation")
  const validityState = input.validity;

  if (validityState.valueMissing) {
    console.log("valueMissing")
    input.setCustomValidity('Это поле обязательно для заполнения!');
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity('Thats too high!');
  } else if (validityState.tooShort) {
    console.log("tooShort");
    input.setCustomValidity('Слишком короткое значение!');
  } else if (validityState.tooLong) {
    input.setCustomValidity('Слишком длинное значение!');
  } else {
    input.setCustomValidity('');
  }

  input.reportValidity();
}

const town = document.getElementById("form_town");
const date = document.getElementById("form_date");
const form_ticket_count = document.getElementById("form_ticket_count");
const form = document.getElementById("modal__container");

let isBlur = false;
// town.addEventListener("blur", function(event) { checkValidation(this); isBlur = true });
// town.addEventListener("input", function(event) { console.log("input"); this.setCustomValidity("") })
// // date.addEventListener("blur", function(event) { checkValidation(this) });
// town.addEventListener("invalid", function(event) {
//   console.log("town");
//   if (!isBlur) {
//     console.log("event.preventDefault()");
//     event.preventDefault();
//   } else isBlur = false;
// })


function bindInput(input) {
  let wasPrevented = false;
  input.addEventListener("invalid", function(event) {
    if (!wasPrevented) {
      event.preventDefault();
      wasPrevented = true;
      checkValidation(this);
      this.style.border = "1px solid red";
    } else {
    }
  });
  input.addEventListener("input", () => {
    wasPrevented = false;
    input.setCustomValidity("");
    input.style.border = "1px solid black";
    // input.reportValidity();
  });
};

bindInput(town);
bindInput(date);
bindInput(form_ticket_count);


form.addEventListener("submit", function(event) {
  console.table({
    town: town.value,
    date: date.value,
    form_ticket_count: form_ticket_count.value,
  });
})


// APIS

const API = 'http://students-api.std-1578.ist.mospolytech.ru/api';

async function makeRequest(url, method, body = null) {
  const bodyJSON = body ? {
    body: JSON.stringify(body),
  } : {};
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      ...bodyJSON,
    })
      .then(response => response.json()).then(result => resolve(result))
      .catch(error => resolve(error));
  })
};

function showRes(result, elem) {
  try {
    elem.innerText = JSON.stringify(result, null, 2);
  } catch {
    elem.innerText = result;
  }
}

const buttonGet = document.getElementById("button-get");
const buttonPost = document.getElementById("button-post");

buttonGet.addEventListener("click", async () => {
  const dataRoot = document.getElementById("button-get-answer");
  dataRoot.innerHTML = '';
  buttonGet.classList.add("button--disable");
  buttonPost.setAttribute("disabled", "true");
  const result = await makeRequest(`${API}/get/`, "GET");
  buttonPost.removeAttribute("disabled");
  buttonGet.classList.remove("button--disable");
  showRes(result, dataRoot);
});

buttonPost.addEventListener("click", async () => {
  const dataRoot = document.getElementById("button-post-answer");
  dataRoot.innerHTML = '';
  buttonPost.classList.add("button--disable");
  buttonPost.setAttribute("disabled", "true");
  const result = await makeRequest(`${API}/post/`, "POST", {
    name: "Alexandr Zhavoronkov",
    group: "211-321",
  });
  buttonPost.removeAttribute("disabled");
  buttonPost.classList.remove("button--disable");
  
  showRes(result, dataRoot);
});