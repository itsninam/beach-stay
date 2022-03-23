//mobile drop-down menu function
const mobileMenu = document.querySelector(".mobileMenu");
const navBar = document.querySelector(".hidden");

mobileMenu.addEventListener("click", function () {
  navBar.classList.toggle("hidden");
});

//assignment 2 - modal window
const submitButton = document.querySelector("#formSubmit");
const modalWindow = document.querySelector(".modalWindow");
const closeModal = document.querySelector("#hideModal");
const userMessage = document.querySelector("#message");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");

function toggleModal() {
  modalWindow.classList.toggle("showModal");
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (!userMessage.value || !userName.value || !userEmail.value) {
    userMessage.placeholder = "Please enter a message!";
    userMessage.classList.add("warningText");
    userName.placeholder = "Please enter your name!";
    userName.classList.add("warningText");
    userEmail.placeholder = "Please enter your email!";
    userEmail.classList.add("warningText");
  } else {
    toggleModal();
  }
});

closeModal.addEventListener("click", function (event) {
  event.preventDefault();
  toggleModal();
});
