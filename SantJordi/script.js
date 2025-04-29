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
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    //Create board
    let squares = [];
    
    function createBoard(){
        for(let i=0; i < layout.length; i ++){
            const square = document.createElement ('div')
            if(layout[i]==5){
                square.classList.add("cami")
            }else if (layout [i]==0){
                square.classList.add("laberinto")
            }else if (layout [i]==1){
                square.classList.add("paret")
            }else if (layout [i]==2){
                square.classList.add("red")
            }else if (layout [i]==3){
                square.classList.add("princep")
            }else if (layout [i]==7){
                square.classList.add("princesa")
            }else if (layout [i]==9){
                square.classList.add("rosa")
            }
            grid.appendChild (square);
            squares.push(square)
        }
    }
    createBoard();
    
    console.log(squares)
    
    let posicioPrincep = 30;
    squares[posicioPrincep].classList.add("princep");
    function movePrincep(e) {
        squares[posicioPrincep].classList.remove("princep");
        switch (e.key) {
            case 'ArrowLeft':
                if(!squares[posicioPrincep-1].classList.contains('paret')&&
                    !squares[posicioPrincep-1].classList.contains('red'))
                posicioPrincep -= 1
                if(squares[posicioPrincep - 1 ] === squares[363])
                    posicioPrincep = 391
                break;
            case 'ArrowRight':
                if(!squares[posicioPrincep+1].classList.contains('paret')&&
                    !squares[posicioPrincep+1].classList.contains('red'))
                posicioPrincep += 1
                if(squares[posicioPrincep + 1 ] === squares[363])
                    posicioPrincep = 391
                break;
                case 'ArrowUp':
                    if(!squares[posicioPrincep-28].classList.contains('paret')&&
                    !squares[posicioPrincep-28].classList.contains('red'))
                posicioPrincep -= 28
                break;
            case 'ArrowDown':
                if(!squares[posicioPrincep+28].classList.contains('paret')&&
                    !squares[posicioPrincep+28].classList.contains('red'))
                posicioPrincep += 28
                break;
        }
        squares[posicioPrincep].classList.add("princep");
        
        petalAgafat()
        rosaAgafada()
        checkForWin()
        checkForGameOver()
    
    }
    
    document.addEventListener ('keyup', movePrincep)
    
    function petalAgafat (){
        if(squares[posicioPrincep].classList.contains('laberinto')){
            score ++
            scoreDisplay.innerHTML = score 
            squares[posicioPrincep].classList.remove('laberinto')
    }
    }
    document.addEventListener ('keyup', movePrincesa)
    function rosaAgafada (){
        if(squares[posicioPrincesa].classList.contains('rosa')){
            score += 10
            scoreDisplay.innerHTML = score 
            squares[posicioPrincesa].classList.remove('rosa')
    
            espantaDracs(true)
            setTimeout(()=>espantaDracs(false),1000)
    }
    }
    
    function espantaDracs (scaredDrac){
        dracs.forEach(drac=> drac.isScared=scaredDrac)
    }
    
    
    
    class Drac {
        constructor (className, startIndex, speed){
            this.className=className
            this.startIndex=startIndex
            this.speed=speed
            this.currentIndex=startIndex
            this.isScared= false
            this.timerId= NaN
        }
    }
    const dracs = [
        new Drac ('drac1', 350, 250),
        new Drac ('drac2', 348, 400),
        new Drac ('drac3', 349, 250),
        new Drac ('drac4', 351, 250),
    ]
    
    dracs.forEach(drac=>{
    squares[drac.currentIndex].classList.add(drac.className, 'drac')
    })
    
    dracs.forEach(drac=>moveDrac(drac))
    
    function moveDrac(drac){
    const directions =[-1,1,width,-width]
    let direction = directions[Math.floor(Math.random()*directions.length)]
    
    
    drac.timerId = setInterval(function () {
        if (
            !squares[drac.currentIndex + direction].classList.contains('paret') &&
            !squares[drac.currentIndex + direction].classList.contains('drac')
        ) {
            squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'drac-assustat');
            drac.currentIndex += direction;
            squares[drac.currentIndex].classList.add(drac.className, 'drac');
        } else {
            direction = directions[Math.floor(Math.random() * directions.length)];
        }
    
        if (drac.isScared) {
            squares[drac.currentIndex].classList.add(drac.className, 'drac', 'drac-assustat');
        }
    
        if (
            drac.isScared &&
            squares[drac.currentIndex].classList.contains('princesa')
        ) {
            score += 100;
            scoreDisplay.innerHTML = score;
            drac.isScared = false;
            squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'drac-assustat');
            drac.currentIndex = drac.startIndex;
            squares[drac.currentIndex].classList.add(drac.className, 'drac');
        }

    }, drac.speed
    )
    }
    
    function checkForGameOver() {
        if (
            squares[posicioPrincep].classList.contains('drac') &&
            !squares[posicioPrincep].classList.contains('drac-assustat')
        ) {
            // Cambiar color de todos los dragones a negro
            dracs.forEach(drac => {
                clearInterval(drac.timerId);
                squares[drac.currentIndex].classList.add('drac-negre');
            });
    
            document.removeEventListener('keyup', movePrincep);
            setTimeout(function () { alert('Game Over') }, 100);
        }

}
    function checkForWin(){
    if(score>= 10){
        dracs.forEach(drac =>clearInterval(drac.timerId))
        document.removeEventListener('keyup', movePrincep)
        setTimeout(function(){alert('You are winner')},100)}}
    
    
    let posicioPrincesa = 660;
    squares[posicioPrincesa].classList.add("princesa");    
    function movePrincesa(e) {
        squares[posicioPrincesa].classList.remove("princesa");
        switch (e.key) {
            case 'a':
                if(!squares[posicioPrincesa-1].classList.contains('paret')&&
                    !squares[posicioPrincesa-1].classList.contains('red'))
                posicioPrincesa -= 1
                break;
            case 'd':
                if(!squares[posicioPrincesa+1].classList.contains('paret')&&
                    !squares[posicioPrincesa+1].classList.contains('red'))
                posicioPrincesa += 1
                break;
                case 'w':
                    if(!squares[posicioPrincesa-28].classList.contains('paret')&&
                    !squares[posicioPrincesa-28].classList.contains('red'))
                posicioPrincesa -= 28
                break;
            case 's':
                if(!squares[posicioPrincesa+28].classList.contains('paret')&&
                    !squares[posicioPrincesa+28].classList.contains('red'))
                posicioPrincesa += 28
                break;
        }
        squares[posicioPrincesa].classList.add("princesa");
    
        petalAgafat()
        rosaAgafada()
    }
    
    document.addEventListener ('keyup', movePrincesa);
    }
    )
    