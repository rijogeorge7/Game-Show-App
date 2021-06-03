const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;
const resetButton = document.querySelector(".btn__reset");
const phrases = ["like you","love you","prolong","life is not easy","life is wonderful"];

resetButton.addEventListener("click", (event) => {
    if (resetButton.textContent === "Reset Game") {
        resetGame();
    }
    
    document.getElementById("overlay").style.display = "none";
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray); 
});

function startGame() {
    
}

function getRandomPhraseAsArray(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomString = arr[randomIndex];
    return Array.from(randomString);
} 

function resetGame() {
    removeExistingPhrase();
    resetButtons();
    resetTries();
}

function removeExistingPhrase() {
    let list = phrase.querySelectorAll("li");
    for (let i=0; i<list.length; i++) {
        phrase.removeChild(list[i]);
    }
    
}
function resetButtons() {
    let chosen = document.querySelectorAll(".chosen");
    for(let i=0; i< chosen.length; i++) {
        chosen[i].classList.remove("chosen");
        chosen[i].disabled = false;
    }
}

function resetTries() {
    missed = 0;
    const scoreBoard = document.getElementById("scoreboard");
    const ol = scoreBoard.firstElementChild;
    let listLeft = ol.children.length
    for (let i=0; i < 5 - listLeft ; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = "images/liveHeart.png";
    img.setAttribute('height', '35px');
    img.setAttribute('width', '30 px');
    li.appendChild(img);
    li.classList.add("tries");
    ol.appendChild(li);
    console.log(i+" appended");
    }
}

function addPhraseToDisplay(arr) {
    console.log(arr);
    for (let i=0; i < arr.length; i++) {
        let list = document.createElement("li");
        list.appendChild(document.createTextNode(arr[i]));
        if(arr[i] != " "){
            list.classList.add("letter");
        } else {
            list.classList.add("space");
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
if (event.target.type == "submit" ){
    event.target.classList.add("chosen");
    event.target.disabled = true;
    const letterFound = checkLetter(event.target);
    if(letterFound === null) {
        missed++;
        const trie = document.querySelector(".tries");
        const triesParent = trie.parentElement;
        triesParent.removeChild(trie);
    }
}
checkWin();
});

function checkWin() {
    const showNo = document.querySelectorAll(".show").length;
    const letterNo = document.querySelectorAll(".letter").length;
    if (showNo === letterNo) {
        showWinScreen();
    } else if (missed >= 5) {
        showLoseScreen()
    }
}

function showWinScreen() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("lose");
    overlay.classList.add("win");
    const h2 = overlay.firstElementChild;
    h2.textContent = "you won the game";
    //const resetButton = overlay.querySelector("btn__reset");
    resetButton.textContent = "Reset Game"
    overlay.style.display = "flex";
}

function showLoseScreen() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("win");
    overlay.classList.add("lose");
    const h2 = overlay.firstElementChild;
    h2.textContent = "you Lose the game, try again";
    //const resetButton = overlay.querySelector("btn_reset");
    resetButton.textContent = "Reset Game"
    overlay.style.display = "flex";
}