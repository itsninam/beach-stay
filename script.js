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

//show/hide modal window
function toggleModal() {
  modalWindow.classList.toggle("showModal");
}

//warn user if no input provided
function warnUser(warning) {
  warning.classList.add("warningText");
}

//remove warning when input submitted
function removeWarning(warning) {
  warning.classList.remove("warningText");
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const userMessage = document.querySelector("#message");
  const userName = document.querySelector("#name");
  const userEmail = document.querySelector("#email");

  if (!userMessage.value || !userName.value || !userEmail.value) {
    userMessage.placeholder = "Please enter a message!";
    warnUser(userMessage);

    userName.placeholder = "Please enter your name!";
    warnUser(userName);

    userEmail.placeholder = "Please enter your email!";
    warnUser(userEmail);
  } else {
    userMessage.value = "";
    userMessage.placeholder = "Message";
    removeWarning(userMessage);

    userName.value = "";
    userName.placeholder = "Name";
    removeWarning(userName);

    userEmail.value = "";
    userEmail.placeholder = "Email";
    removeWarning(userEmail);

    toggleModal();
  }
});

//close modal window
closeModal.addEventListener("click", function (event) {
  event.preventDefault();
  toggleModal();
});
