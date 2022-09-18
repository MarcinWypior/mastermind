document.addEventListener('DOMContentLoaded', (event) => {
let colors=6;
let attempts=8;
let slots=4;

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
    }
                                 
    for(let i=0;i<randomColors.length;i++)
        console.log(randomColors[i]);
    
    
    
});


