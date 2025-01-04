let usersocre = 0;
let compscore = 0;

const choice = document.querySelectorAll(".item")
const you = document.querySelector("#score-user")
const computer = document.querySelector("#score-comp")
const ans = document.querySelector("#ans")
const btn = document.querySelector("#reset")


choice.forEach( (ele) => {
    ele.addEventListener("click", () => {
        const userchoice = ele.getAttribute('id')
        const compchoice = compdata()
        const winlose = answer(userchoice,compchoice)
        score(winlose)
        display(userchoice,compchoice,winlose)

        // console.log(userchoice);
        // console.log(compchoice);
        // console.log(winlose);
        // console.log(usersocre,compscore);
        
    })
})

//Reset the Score to 0|0
btn.addEventListener("click", () => {
    usersocre = 0
    compscore = 0
    console.log("Yup reset is Working!");
    you.innerText = usersocre
    computer.innerText = usersocre
    ans.innerText = "Pick your Choice!"
    ans.style.backgroundColor = "white"
})


//This function is used for displaying the score.
function display(userchoice,compchoice,winlose){
    if (winlose === "Draw"){
        ans.innerText = "Draw! Play Again"
        ans.style.backgroundColor = "#FFEE00"
    }else{
        if (winlose === true){
            ans.innerText = `Victory! You choose ${userchoice} and computer choose ${compchoice}`
            ans.style.backgroundColor = "lightgreen"
        }else{
            ans.innerText = `Lost! You choose ${userchoice} and computer choose ${compchoice}`
            ans.style.backgroundColor = "#F07470"
        }
    }
}

//This Function is updating the Score.
function score(winlose){
    if (winlose === true) {
        usersocre++
        you.innerText = usersocre
    }else if(winlose === false){
        compscore++
        computer.innerText = compscore
    }
}

//This finction is checking whoes winning user or computer (True or False)
function answer(userchoice,compchoice){
    if (userchoice === compchoice){
        return "Draw"
    }else{
        let win = true;
        if (userchoice === "rock"){
            if (compchoice === "paper"){
                win = false
            }
        }else if (userchoice === "scissors"){
            if (compchoice === "rock"){
                win = false
            }
        }else{
            if (compchoice === "scissors"){
                win = false
            }
        }
        return win
    }
}


//Creating Computer Choice
function compdata(){
    const arr= ["rock" , "paper" , "scissors"]
    let ran = Math.floor(Math.random() * 3)
    return comp = arr[ran]
}
