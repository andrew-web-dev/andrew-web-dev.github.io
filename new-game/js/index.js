let password = 0
let pinNumVal = 0
let user = ""
let redGem = document.getElementById("redGem")
    let blueGem = document.getElementById("blueGem")
    let greenGem = document.getElementById("greenGem")
    let defend = document.getElementById("defend")

    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    defend.disabled = true


//enter pin number here
let enterBtn = document.getElementById("enter")
enterBtn.addEventListener("click", function(){
    let pinNum = document.getElementById("pin")
    pinNumVal = pinNum.value
    let helloplayer = document.getElementById("hello")
    
    
    //alert(pinNumVal)

    if (pinNumVal == 3578){
        helloplayer.innerHTML = "<h5>Hello Micah Ng!</h5>"
        user = "Micah Ng"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 9035){
        helloplayer.innerHTML = "<h5>Hello Lai Xin Rui!</h5>"
        user = "Lai Xin Rui"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 1029){
        helloplayer.innerHTML = "<h5>Hello Ethan Tan!</h5>"
        user = "Ethan Tan"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 6588){
        helloplayer.innerHTML = "<h5>Hello Tee Jun Yao!</h5>"
        user = "Tee Jun Yao"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 1072){
        helloplayer.innerHTML = "<h5>Hello Joshua Lu!</h5>"
        user = "Joshua Lu"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 4084){
        helloplayer.innerHTML = "<h5>Hello Hayyan!</h5>"
        user = "Hayyan"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 9852){
        helloplayer.innerHTML = "<h5>Hello Luis Khoo!</h5>"
        user = "Luis Khoo"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 5691){
        helloplayer.innerHTML = "<h5>Hello Jaivi!</h5>"
        user = "Jaivi"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 3839){
        helloplayer.innerHTML = "<h5>Hello Sin Zi Feng!</h5>"
        user = "Sin Zi Feng"
        password = 1
        enableBtns()
        return
    }

    if (password == 0){
        helloplayer.innerHTML = "<h5>Wrong PIN number entered!</h5>"
        return
    }
    

})

let useRedGem = document.getElementById("redGem")
let useBlueGem = document.getElementById("blueGem")
let useGreenGem = document.getElementById("greenGem")
let dontUseGem = document.getElementById("defend")

useRedGem.addEventListener("click", function(){
    let selectedGem = "Red"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingred")
    

    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border="7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    defend.disabled = true
    enterBtn.disabled = true

    sendRequest(pinNumVal, user, selectedGem)
})

useBlueGem.addEventListener("click", function(){
    let selectedGem = "Blue"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingblue")
    

    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border="7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    defend.disabled = true
    enterBtn.disabled = true

    sendRequest(pinNumVal, user, selectedGem)
})

useGreenGem.addEventListener("click", function(){
    let selectedGem = "Green"
    let display = document.getElementById("display")
    let geming = document.getElementById("geminggreen")
    

    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border="7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    defend.disabled = true
    enterBtn.disabled = true

    sendRequest(pinNumVal, user, selectedGem)
})

dontUseGem.addEventListener("click", function(){
    let selectedGem = "Defend"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingnone")
    

    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border="7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    defend.disabled = true
    enterBtn.disabled = true

    //sendRequest(pinNumVal, user, selectedGem)
})

function sendRequest(getPin, getUser, getGem){
    let url = 'https://api.sheety.co/19ddee0378e78668a6c627707586f1b6/gems/selected';
    let body = {
      selected: {
        pin: getPin,  
        name: getUser,
        gem: getGem,
        //sumifs: test,
      }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
      })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
        console.log(json.result);
      
      
      alert(json.selected.gem + " gem selected and sent to Coach Andrew!")
      
  
      });

}



function enableBtns(){
    
    let redGem = document.getElementById("redGem")
    let blueGem = document.getElementById("blueGem")
    let greenGem = document.getElementById("greenGem")
    let defend = document.getElementById("defend")

    redGem.disabled = false
    blueGem.disabled = false
    greenGem.disabled = false
    defend.disabled = false

}