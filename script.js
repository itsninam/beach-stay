//mobile drop-down menu function
const mobileMenu = document.querySelector(".mobileMenu");
const navBar = document.querySelector(".hidden");

mobileMenu.addEventListener("click", function () {
  navBar.classList.toggle("hidden");
});

//assignment 2 - modal window
const formElement = document.querySelector("form");
const modalWindow = document.querySelector(".modalWindow");
const closeModal = document.querySelector("#hideModal");

function toggleModal() {
  modalWindow.classList.toggle("showModal");
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const userMessage = document.querySelector("#message");
  const userName = document.querySelector("#name");
  const userEmail = document.querySelector("#email");

  if (!userMessage.value || !userName.value || !userEmail.value) {
    userMessage.placeholder = "Please enter a message!";
    userMessage.classList.add("warningText");

    userName.placeholder = "Please enter your name!";
    userName.classList.add("warningText");

    userEmail.placeholder = "Please enter your email!";
    userEmail.classList.add("warningText");
  } else {
    userMessage.value = "";
    userMessage.placeholder = "Message";
    userMessage.classList.remove("warningText");

    userName.value = "";
    userName.placeholder = "Name";
    userName.classList.remove("warningText");

    userEmail.value = "";
    userEmail.placeholder = "Email";
    userEmail.classList.remove("warningText");
    toggleModal();
  }
});

closeModal.addEventListener("click", function (event) {
  event.preventDefault();
  toggleModal();
});
