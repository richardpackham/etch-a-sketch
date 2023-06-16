function createGrid(number){
    let dimension = squareDimensions(number)
    addStyles(dimension)
    let container = document.querySelector("#container");
    for (let i=0; i < number; i++){
        let row = createRow(number);
        container.appendChild(row);
    }
}

function createRow(number){
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i=0; i < number; i++){
        let col = createColumn(number);
        row.appendChild(col);
    }
    return row;
}  

function createColumn(number){
    let col = document.createElement("div");
    col.classList.add("col");
    col.addEventListener("mouseover",hover)

    return col;
}
function squareDimensions(number){
    return 100/number;
}

// Your CSS as text

function addStyles(dimension){
    var styles = `
    .col{
        display:flex;
        width:${dimension}%;
        height: ${dimension}%;
        aspect-ratio:1;
    }
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
}

// function hover(){
//     console.log(this)
//     this.classList.add("hover")
// }

function hover(){
   this.classList.toggle("hover");
   let opacity = (this.style.opacity);
   console.log(opacity)
   if ( opacity == "1" ){
    return;
   }
   else{
    opacity = opacity * 10 
    opacity += 1
    opacity = opacity/10
    this.style.opacity=opacity
    console.log(opacity)
   }
}

function changeSize(){
    let choice = prompt("How many squares?");
    if ((choice.isNan) || (parseInt(choice) > 100)){
        return
    }
    else{
        resetGrid()
        createGrid(parseInt(choice))
    }
}

function resetGrid(){
    document.querySelector('#container').innerHTML="";
};


document.querySelector('#container').addEventListener('click', function(event){
    if (event.target.classList.contains("col")){
       hover()
    }
  });

document.querySelector('#changeSize').addEventListener('click', changeSize);

createGrid(16)