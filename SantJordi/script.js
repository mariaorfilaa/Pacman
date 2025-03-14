document.addEventListener("DOMContentLoaded", function(){
const scoreDisplay = document.getElementById("score");
const width = 28;
let score = 0;
const grid = document.querySelector (".grid");

//0 -pètal
//1 - mur
//2 - cova
//3 - rosa
//4 - buit

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
    1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,
    1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,0,2,2,2,1,1,1,2,2,2,0,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,
    1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,
    1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,
    1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]

//Create board
let squares = [];

function createBoard(){
    for(let i=0; i < layout.length; i ++){
        const square = document.createElement ('div')
        if(layout[i]==5){
            square.classList.add("brown")
        }else if (layout [i]==1){
            square.classList.add("paret")
        }else if (layout [i]==2){
            square.classList.add("pink")
        }else if (layout [i]==3){
            square.classList.add("red")
        }else if (layout [i]==0){
            square.classList.add("green")
        }
        grid.appendChild (square);
        squares.push(square)
    }
}
createBoard();

console.log(squares)

let posicioPrincep = 490;
squares[posicioPrincep].classList.add("princep");

function movePrincep(e){
    squares[posicioPrincep].classList.remove("princep");
        switch(e.key){
            case 'ArrowLeft':
                posicioPrincep -=1
                break;
            case 'ArrowRight':
                posicioPrincep +=1
                break;
            case 'ArrowUp':
                posicioPrincep -=28
                break;
            case 'ArrowDown':
                posicioPrincep +=28
                break;

        }
        squares[posicioPrincep].classList.add("princep");
}

document.addEventListener ('keyup', movePrincep);

})