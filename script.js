document.addEventListener('DOMContentLoaded', (event) => {
let colors=6;
let attempts=8;
let slots=4;
let currentRow=1;
    
console.log(colors+" kolorów do zgadywania \n");
console.log(attempts+" prób \n");
console.log(slots+" miesjsca na kulki \n");
    
var randomColors=[];    
    for(let i=0;i<slots;i++)
    {
        switch(Math.floor(Math.random() * colors)+1)
        {
            case 1: 
            randomColors[i]="red";
            break;
            case 2: 
            randomColors[i]="yellow";
            break;
            case 3: 
            randomColors[i]="green";
            break;
            case 4: 
            randomColors[i]="blue";
            break;
            case 5: 
            randomColors[i]="orange";
            break;
            case 6: 
            randomColors[i]="purple";
            break;
            case 7: 
            randomColors[i]="cyan";
            break;
        }
    } //Koniec losowania kolorów
    
    for(let k=0;k<4;k++){
    var globalColors = document.createElement("div");
    globalColors.className="invisible";
    globalColors.innerHTML=randomColors[k];
    document.body.appendChild(globalColors);
    }
                                     
    
    createNewP();
    insertBallsToLastP();
        
    insertVerifyButton();
    
    
    
    var black0AndWhite1=[];
    black0AndWhite1[0]=0;
    var lastAttempt=[];
    var randomColors=[];
    lastAttempt= colorsLastAttempt();
    randomColors= readRandomColors();
    
    for(let i=0;i<4;i++){
        console.log("twoja proba " + lastAttempt[i]);
        console.log("wylosowana  " + randomColors[i]);
     if(lastAttempt[i]==randomColors[i]){
         black0AndWhite1[1]++;
         console.log("są takie same dla kuli nr " + i);
        }
    }
});


function createNewP(){
    var newRow=document.createElement("p");
    newRow.className="row";
    newRow.setAttribute("data-rowNumber", 1);
    document.body.appendChild(newRow);
}

function insertBallsToLastP(){
    let lastRow=document.getElementsByClassName("row").length;
    
    for(let i=1;i<5;i++)
    document.getElementsByClassName("row")[lastRow-1].appendChild(createBall(i));
}

function createBall(i) {
    
    
    var newBall=document.createElement("span");
                    newBall.className="ball";
                    newBall.setAttribute("data-color", "gray");
                    newBall.setAttribute("data-number", i);

                    newBall.addEventListener('click', function() {    

              if(this.dataset.color=="gray")
              {
                this.style.backgroundColor="red";//1
                this.dataset.color="red";
              }

              else if(this.dataset.color=="red")
              {
                this.style.backgroundColor="yellow";//2
                this.dataset.color="yellow";
              }

              else if(this.dataset.color=="yellow")
              {
                this.style.backgroundColor="green";//3
                  this.dataset.color="green";
              }

              else if(this.dataset.color=="green")
              {
                      this.style.backgroundColor="blue";//4
                      this.dataset.color="blue";
              }
              else if(this.dataset.color=="blue")
              {          
                        this.style.backgroundColor="orange";//5
                        this.dataset.color="orange";      
              }
              else if(this.dataset.color=="orange")
              {
                        this.style.backgroundColor="purple";//6
                        this.dataset.color="purple";
            
              }
              else if(this.dataset.color=="purple")
              {
                this.style.backgroundColor="red";//1
                this.dataset.color="red";
              }
                    });
  return newBall;
};

function lockColorChangeInLastP(){
   let lastP=document.getElementsByClassName("row").length
    //console.log(document.getElementsByClassName("row")[lastP-1].children[1]);
    
    var ballsNumber = document.getElementsByClassName("row")[lastP-1].children.length;
    
    for(i=0;i<ballsNumber;i++)
    document.getElementsByClassName("row")[lastP-1].children[i].dataset.color="locked";
}

function colorsLastAttempt(){
    let lastP=document.getElementsByClassName("row").length
    var ballsNumber = document.getElementsByClassName("row")[lastP-1].children.length;
    let results=[];
    
    for(i=0;i<ballsNumber-1;i++){
        results[i]=document.getElementsByClassName("row")[lastP - 1].children[i].dataset.color
   }
    return results;
}

function insertVerifyButton(){
  var newVerificationButton=document.createElement("div");
    newVerificationButton.className="verificationButton";
    newVerificationButton.innerHTML="Sprawdź";
    newVerificationButton.addEventListener("click",verifiAndInsert)
    
     let lastRow=document.getElementsByClassName("row").length;
    
    for(let i=1;i<5;i++)
    document.getElementsByClassName("row")[lastRow-1].appendChild(newVerificationButton);
}

function verifiAndInsert(){
    
    var results=colorsLastAttempt();
    
    for(let i=0;i<results.length;i++)
    {
        //console.log(results);
        if(results[i]=='gray'){
            alert("zostawiłeś szarą kulkę");
        return;}
    }
    
    lockColorChangeInLastP();
    
    var randomColors=readRandomColors();
    var whiteBalls=0;
    var blackBalls=0;
    
    for(let i=0;i<results.length;i++)
    {
        if(results[i]===randomColors[i]){
           blackBalls++;
            randomColors[i];
            console.log("wybrałeś "+results[i]+ " na pozycji "+i  +" a wylosowało "+randomColors[i]);
            randomColors[i]="gray";
            results[i]="gray";
        }
    }
    
    console.log(results);
    
    for(let i=0;i<results.length;i++)
    {
        for(let j=0;j<results.length;j++)
        {
            if(randomColors[j]==="gray")
                continue;
            
             if(results[i]==="gray")
                continue;
            
            if(results[i]===randomColors[j]){
               whiteBalls++;
                console.log("ten sam kolor " +randomColors[j]+" dla losowych kolorów na pozycji "+j+
                            " i wybranych przez ciebie kolor "+results[i]+ " na pozycji "+i);
                
                randomColors[j]="gray";
                results[i]="gray";
                
            }
        }
    }
    
    console.log(results);
    
    
    addResultBalls(blackBalls,whiteBalls);
    if(blackBalls===4)
    {
        alert("wygrałeś");
        showColorsAtEnd();
        return;
    }
    
    if(document.getElementsByClassName("row").length>7)
    {
        console.log("liczba prób " + document.getElementsByClassName("row").length);
        showColorsAtEnd();
         alert("przegrałeś");
        return;
    }
    
    
    createNewP();
    insertBallsToLastP();
    insertVerifyButton();
}

function readRandomColors(){    
    var randomColors=[];
    for(i=0;i<4;i++){
        randomColors[i]=document.getElementsByClassName("invisible")[i].innerHTML;
    }
    return randomColors;
}

function addResultBalls(b,w){
    
    var results=document.createElement("div");
    results.className="results";
    
    
    
    for(x=0;x<b;x++){
        var resultBall=document.createElement("span");
        resultBall.className="resultBall";
        resultBall.style.backgroundColor="black";
        results.appendChild(resultBall);
    }
    
     for(x=0;x<w;x++){
        var resultBall=document.createElement("span");
        resultBall.className="resultBall";
        resultBall.style.backgroundColor="white";
        results.appendChild(resultBall);
    }
    
    console.log("ilość czarnych rezultat "+b+" ilość białych rezultat " +w);
    
    if((b===0)&&(w===0))
    return;
    
    results.appendChild(resultBall);
    
    let lastRow=document.getElementsByClassName("row").length;

    
    
    document.getElementsByClassName("row")[lastRow-1].appendChild(results);  
}


function showColorsAtEnd(){
    let randomColors=readRandomColors();
    
     var AnswersP=document.createElement("p");
    AnswersP.className="answers";
    AnswersP.innerHTML="poprawne odpowiedzi to: <br><br>";
    
    for(i=0;i<4;i++){
     var newBall=document.createElement("span");
                    newBall.className="ball";
                    newBall.style.backgroundColor=randomColors[i];
        AnswersP.appendChild(newBall);
    }   
    document.body.appendChild(AnswersP); 
}





