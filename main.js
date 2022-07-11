const game = document.getElementById('game');
const  cells = document.getElementsByClassName('game__cell');
const winDisplay=  document.getElementsByClassName('win')[0];

let step =0;

let crossResult = document.getElementById('cross-result');
let zeroResult = document.getElementById('zero-result');
let cross=0;
let zero =0;

const winRanking=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

game.addEventListener('click',  e=>{
    if (e.target.className == 'game__cell' && e.target.innerHTML=="") {
        
        if (step%2  == 0) e.target.innerHTML = 'X';
        else e.target.innerHTML = 'O';
        step++;
        check();
    };
})

function check(){
    let fool = true;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML=="") fool=false;
    }
    if (fool==true) {wipe();console.log("a")}
    for (let i = 0; i < winRanking.length; i++) {
       if (
           cells[winRanking[i][0]].innerHTML =="X" && cells[winRanking[i][1]].innerHTML =="X" && cells[winRanking[i][2]].innerHTML =="X") { 
               prepareResult("X",i);
               winDisplay.classList.add('active');
            }
       else  
       if (
           cells[winRanking[i][0]].innerHTML =="O" && cells[winRanking[i][1]].innerHTML =="O" && cells[winRanking[i][2]].innerHTML =="O") {
           prepareResult("O",i);
           winDisplay.classList.add('active');
       } 
    }
    
};

function prepareResult (result,line){
    if (result == 'X') {
        cross++;
        crossResult.innerHTML=cross;
    }
    else {
        zero++;
        zeroResult.innerHTML=zero;
    }
    console.log(line);
    for (let i = 0; i < winRanking[0].length; i++) {
      console.log(cells[winRanking[line][i]]);
      cells[winRanking[line][i]].style.backgroundColor='red';
    }
}

winDisplay.addEventListener('click',e=>{
    wipe();
    winDisplay.classList.remove("active");
    
})

function wipe(){
    for (let i = 0; i < cells.length; i++) {
       cells[i].innerHTML = '';
       cells[i].style.backgroundColor="transparent"
    }
    step=0;
}