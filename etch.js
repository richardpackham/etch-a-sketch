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
        width:${dimension}vw;
        height: ${dimension}vw;
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
   this.classList.toggle("hover")
}

document.querySelector('#container').addEventListener('click', function(event){
    if (event.target.classList.contains("col")){
      // do your action on your 'li' or whatever it is you're listening for
      console.log("yo");
      hover()
    }
  });


createGrid(16)