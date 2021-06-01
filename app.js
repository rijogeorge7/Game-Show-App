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