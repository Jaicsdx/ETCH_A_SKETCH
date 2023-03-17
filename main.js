

function pixalate(a)
{
    let board = document.querySelector(".board")
  
board.style.gridTemplateColumns = `repeat(${a}, 1fr)`
board.style.gridTemplateRows = `repeat(${a}, 1fr)`


for (let i=0; i<256; i++)
{
    let square =document.createElement("square")
    square.style.backgroundColor ="white";
    board.insertAdjacentElement("beforeend",square)
    square.addEventListener("mouseover", ()=>{
    square.style.backgroundColor =color;})


}

}
pixalate(16)

function changeSize(input)
{
    pixalate(input)
}


function colorsquare()
{
    this.style.backgroundColor =color;

}
function changecolor(choice)
{
    color=choice;}


    /* let a = document.querySelector("[name='a']"),
      b = document.querySelector("[name='b']");

      document.querySelector("button").addEventListener("click", ()=>{
        const sum = Number(a.value)+Number(b.value);
        alert(sum);
    */