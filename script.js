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
                                 
    for(let i=0;i<randomColors.length;i++)
        console.log(randomColors[i]);
    
    
    

    createNewP();
    insertBallsToLastP();
    createNewP();
    insertBallsToLastP();

    
    console.log(verification());
    lockColorChangeInLastP();
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

function verification(){
    let lastP=document.getElementsByClassName("row").length
    var ballsNumber = document.getElementsByClassName("row")[lastP-1].children.length;
    let results=[];
    
    for(i=0;i<ballsNumber;i++){
        results[i]=document.getElementsByClassName("row")[lastP - 1].children[i].dataset.color
   }
    return results;
}





