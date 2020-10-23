var toggle=true;
var gameIsOn=true;
var winner="none"
var ID=0
var t=document.getElementsByClassName('tile');

function main(){
    for (let i = 0; i < t.length; i++) {
        t[i].addEventListener("click",smash)
        
    }
}
function smash(){
    if(gameIsOn){
        if(this.classList.contains("pl2")||this.classList.contains("pl1")){
            console.log("cant smash here")
        }
        else{
            console.log("smashing")
            if(toggle){
                this.classList.add("pl1")
                this.classList.add("checked")
                this.innerText="✘"
            }
            else{
                this.classList.add("pl2")
                this.classList.add("checked")
                this.innerText="❍"
            }
            toggle=!toggle   
            checkWin()
            if(winner!="none"){
                if(winner=="pl1"){
                    document.getElementById("winner").innerText="Player 1 wins"
                }
                else if(winner=="tie"){
                    document.getElementById("winner").innerText="Game is Tie"
                }
                else {
                    document.getElementById("winner").innerText="Player 2 wins"
                }
                ID=window.setTimeout(reset_board,10000)
            }
        }
    }
}


var s=[9]

function checkWin(){
    console.log("checking")
    for(let i=0;i<9;i++){
        s[i]= String(t[i].classList)
    }
    let j=0
    for(let i=0;i<9;i++){
       
        if(t[i].classList.contains("checked")){
            j++;
        }
        if(j==9){
            winner="tie"
        }
    }
    if(t[0].classList.contains("checked")){
        if(s[0]==s[1]&& s[1]==s[2]){
            console.log("win")
            gameIsOn=false
            if (t[0].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
        if(s[0]==s[3] && s[3]==s[6]){
            console.log("win")
            gameIsOn=false
            if (t[0].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
        if(s[0]==s[4] && s[4]==s[8]){
            console.log("win")
            gameIsOn=false
            if (t[0].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
    }
    if(t[1].classList.contains("checked")){
        if(s[1]==s[4] && s[4]==s[7]){
            console.log("win")
            gameIsOn=false
            if (t[1].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
    }
    if(t[2].classList.contains("checked")){
        if(s[2]==s[5] && s[5]==s[8]){
            console.log("win")
            gameIsOn=false
            if (t[2].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
        if(s[2]==s[4] && s[4]==s[6]){
            console.log("win")
            gameIsOn=false
            if (t[2].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
    }
    if(t[3].classList.contains("checked")){
        if(s[3]==s[4] && s[4]==s[5]){
            console.log("win")
            gameIsOn=false
            if (t[3].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
    }
    if(t[6].classList.contains("checked")){
        if(s[6]==s[7] && s[7]==s[8]){
            console.log("win")
            gameIsOn=false
            if (t[6].classList.contains("pl1")) {
                winner="pl1"
            }
            else{
                winner="pl2"
            }
        }
    }
        
}
function reset_board(){
    for (let i = 0; i < 9; i++) {
    t[i].classList.remove("checked")
    t[i].classList.remove("pl1")
    t[i].classList.remove("pl2")
    t[i].innerText=""
    }
    toggle=true
    gameIsOn=true
    winner="none"
    document.getElementById("winner").innerText=""
    window.clearTimeout(ID)
}
main()