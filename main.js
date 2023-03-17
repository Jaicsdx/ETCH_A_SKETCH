let board = document.querySelector(".board")
board.style.gridTemplateColumns = "repeat(16, 1fr)" 
board.style.gridTemplateRows = "repeat(16, 1fr)"


for (let i=0; i<256; i++)
{
    let square =document.createElement("square")
    square.style.backgroundColor ="red";
    board.insertAdjacentElement("beforeend",square)
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor ="blue";

    })
}