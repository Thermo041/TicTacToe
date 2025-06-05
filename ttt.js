let boxes=document.querySelectorAll(".box")

let turn0=true;

let spans=document.querySelector("span")

boxes.forEach((i)=>
{
    i.addEventListener("click",()=>
    {
        if(i.innerText !== "") return

        else if(turn0)
        {
            i.innerText="0"
            turn0=false
            spans.innerText="Turn of X"
        }
        else{
            i.innerText="X"
            turn0=true
            spans.innerText="Turn of 0"
        }

        checkwin()   //imp

    })
})



const winners=[
    [0,1,2],      //[pattern[0],pattern[1],pattern[2]]
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let checkwin=()=>
{
    for (const pattern of winners) {
        let x=boxes[pattern[0]].innerText
        let y=boxes[pattern[1]].innerText
        let z=boxes[pattern[2]].innerText
        
        if(x!=="" && y!=="" && z!=="")
        {
            if(x===y && y===z)
            {
                spans.innerText=`Winner is ${x} 😎`

                boxes.forEach(i=>{
                i.classList.add("disabled");
                })
            }
        }

    }

    let isDraw = true;
  boxes.forEach(i => {
    if (i.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    spans.innerText = "Game Draw 😐";
  }

}

let buttons = document.querySelector("button");

buttons.addEventListener("click", () => {
  boxes.forEach(i => {
    i.innerText = "";
    i.classList.remove("disabled");
  });
  spans.innerText = "Turn of 0";
  turn0 = true;
});





