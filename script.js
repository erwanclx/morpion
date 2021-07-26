let gameactivation = true;
let activeplayer = "X";
let gamestate = ["","","","","","","","",""]

// Conditions de victoire

const victorycondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Const score

const win = () => 'Le joueur ${activeplayer} a gagné, félicitation !'
const equaliy = () => "Personne n'a gagné, peut être la prochaine fois ?"



function newGame() {
    let gameactivation = true;
}

document.querySelectorAll(".cases").forEach(cell => cell.addEventListener("click", clickCase))
document.querySelector("#launch").addEventListener("click", newGame)

// Récupération de la valeur de la case

function clickCase(){
    const caseIndex = parseInt(this.dataset.index)

    if(gamestate[caseIndex] !== "" || !gameactivation){
        return
    }

    gamestate[caseIndex] = activeplayer
    this.innerHTML = activeplayer
}

function victorycheck() {
    let victoryround 
}