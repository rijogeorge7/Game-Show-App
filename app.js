const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;
const resetButton = document.querySelector(".btn__reset");
const phrases = ["like you","love you","prolong","life is not easy","life is wonderful"];
resetButton.addEventListener("click", (event) => {
    console.log(phrases);
});