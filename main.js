let a = document.querySelector("[name='a']")
let b = document.querySelector("[name='b']");
document.querySelector("button").addEventListener("click", ()=>{
    
    pixalate(a)})


function pixalate(a)
{
    let board = document.querySelector(".board")
  
board.style.gridTemplateColumns = `repeat(${a}, 1fr)`
board.style.gridTemplateRows = `repeat(${a}, 1fr)`


for (let i=0; i<256; i++)
{
    let square =document.createElement("square")
    square.style.backgroundColor ="red";
    board.insertAdjacentElement("beforeend",square)
    square.addEventListener("mouseover", ()=>{
    square.style.backgroundColor ="blue";})


}

}




    /* let a = document.querySelector("[name='a']"),
      b = document.querySelector("[name='b']");

      document.querySelector("button").addEventListener("click", ()=>{
        const sum = Number(a.value)+Number(b.value);
        alert(sum);
    */