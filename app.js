const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;
const resetButton = document.querySelector(".btn__reset");
const phrases = ["like you","love you","prolong","life is not easy","life is wonderful"];

resetButton.addEventListener("click", (event) => {
    document.getElementById("overlay").style.display = "none";
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray); 
});

function getRandomPhraseAsArray(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomString = arr[randomIndex];
    return Array.from(randomString);
} 

function addPhraseToDisplay(arr) {
    for (let i=0; i < arr.length; i++) {
        
        let list = document.createElement("li");
        list.appendChild(document.createTextNode(arr[i]));
        if(arr[i] != " "){
            list.classList.add("letter");
            console.log(arr[i]);
        }
        phrase.appendChild(list);
    }
}

function checkLetter(btn) {
    const letter = btn.textContent;
    const letterLists = document.querySelectorAll(".letter");
    let matchingLetter = null;
    for (let i=0; i<letterLists.length; i++) {
        if(letterLists[i].textContent === letter) {
            letterLists[i].classList.add("show");
            matchingLetter = letter;
        }
    }
    return matchingLetter;
}

document.getElementById("qwerty").addEventListener("click", (event) => {
    console.log(event.target.type);
if (event.target.type == "submit" ){
    console.log("qwerty button clicked");
    event.target.classList.add("chosen");
    event.target.disabled = true;
    const letterFound = checkLetter(event.target);
}

});