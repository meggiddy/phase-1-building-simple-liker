// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const liked = document.querySelectorAll(".like-glyph");
const modal = document.getElementById("modal");

liked.forEach((element) => {
  element.innerHTML = EMPTY_HEART;

  element.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        //if server returns success change heart to full
        //add the activated class to the heart
        element.innerText = FULL_HEART;
        element.classList.toggle("activated-heart");
        //and reverse
      })
      //display the server error message in the modal
      .catch((error) => {
        modal.classList.remove("hidden");
        modal.innerHTML = error;
        //remove the hidden class from the modal
        //add modal class to hide the modal
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
