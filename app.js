const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;
const resetButton = document.querySelector(".btn__reset");
const phrases = ["like you","love you","prolong","life is not easy","life is wonderful"];

resetButton.addEventListener("click", (event) => {
    console.log(getRandomPhraseAsArray(phrases));
});

function getRandomPhraseAsArray(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomString = arr[randomIndex];
    return Array.from(randomString);
} 