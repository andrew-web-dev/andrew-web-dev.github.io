let password = 0
let pinNumVal = 0
let user = ""
let redGem = document.getElementById("redGem")
let blueGem = document.getElementById("blueGem")
let greenGem = document.getElementById("greenGem")
let purpleGem = document.getElementById("purpleGem")
/* let defend = document.getElementById("defend") */
let enterBtn = document.getElementById("enter")

let whiteGem = document.getElementById("whiteGem")
let shieldGem = document.getElementById("shieldGem")
let arrowGem = document.getElementById("arrowGem")
let swordGem = document.getElementById("swordGem")
let hatGem = document.getElementById("hatGem")
let orbGem = document.getElementById("orbGem")
let teleGem = document.getElementById("teleGem")


redGem.disabled = true
blueGem.disabled = true
greenGem.disabled = true
purpleGem.disabled = true

whiteGem.disabled = true
shieldGem.disabled = true
arrowGem.disabled = true
swordGem.disabled = true
hatGem.disabled = true
orbGem.disabled = true
teleGem.disabled = true
/* defend.disabled = true */


//enter pin number here

enterBtn.addEventListener("click", function () {
    let pinNum = document.getElementById("pin")
    pinNumVal = pinNum.value
    let helloplayer = document.getElementById("hello")


    //alert(pinNumVal)

    if (pinNumVal == 1198) {
        helloplayer.innerHTML = "<h5>Hello Loo Kingsley!</h5>"
        user = "Loo Kingsley"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 8768) {
        helloplayer.innerHTML = "<h5>Hello Kaely!</h5>"
        user = "Kaely Tong"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 2167) {
        helloplayer.innerHTML = "<h5>Hello Ke Xuan!</h5>"
        user = "Ke Xuan"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 4162) {
        helloplayer.innerHTML = "<h5>Hello Justen!</h5>"
        user = "Justen"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 8972) {
        helloplayer.innerHTML = "<h5>Hello Cheng Eu!</h5>"
        user = "Cheng Eu"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 3506) {
        helloplayer.innerHTML = "<h5>Hello Chun Kit!</h5>"
        user = "Chun Kit"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 2830) {
        helloplayer.innerHTML = "<h5>Hello Casey!</h5>"
        user = "Casey"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 7051) {
        helloplayer.innerHTML = "<h5>Hello Ke Nuo!</h5>"
        user = "Ke Nuo"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 9073) {
        helloplayer.innerHTML = "<h5>Hello Chun Pin!</h5>"
        user = "Chun Pin"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 7809) {
        helloplayer.innerHTML = "<h5>Hello Joshua Wong!</h5>"
        user = "Joshua Wong"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 2105) {
        helloplayer.innerHTML = "<h5>Hello Jin Hao!</h5>"
        user = "Jin Hao"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 5086) {
        helloplayer.innerHTML = "<h5>Hello Ee Dong!</h5>"
        user = "Ee Dong"
        password = 1
        enableBtns()
        return
    }

    if (pinNumVal == 3583) {
        helloplayer.innerHTML = "<h5>Hello Jia Hang!</h5>"
        user = "Jia Hang"
        password = 1
        enableBtns()
        return
    }

    if (password == 0) {
        helloplayer.innerHTML = "<h5>Wrong PIN number entered!</h5>"
        return
    }


})

let useRedGem = document.getElementById("redGem")
let useBlueGem = document.getElementById("blueGem")
let useGreenGem = document.getElementById("greenGem")
let usePurpleGem = document.getElementById("purpleGem")

let useWhiteGem = document.getElementById("whiteGem")
let useShieldGem = document.getElementById("shieldGem")
let useArrowGem = document.getElementById("arrowGem")
let useSwordGem = document.getElementById("swordGem")
let useHatGem = document.getElementById("hatGem")
let useOrbGem = document.getElementById("orbGem")
let useTeleGem = document.getElementById("teleGem")

/* let dontUseGem = document.getElementById("defend") */

useRedGem.addEventListener("click", function () {
    let selectedGem = "Red"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingred")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useBlueGem.addEventListener("click", function () {
    let selectedGem = "Blue"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingblue")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useGreenGem.addEventListener("click", function () {
    let selectedGem = "Green"
    let display = document.getElementById("display")
    let geming = document.getElementById("geminggreen")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

usePurpleGem.addEventListener("click", function () {
    let selectedGem = "Purple"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingpurple")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true
    purpleGem.disabled = true
    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

/* dontUseGem.addEventListener("click", function(){
    let selectedGem = "Defend"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingnone")
    

    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border="7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
/* redGem.disabled = true
blueGem.disabled = true
greenGem.disabled = true
defend.disabled = true
enterBtn.disabled = true */

//sendRequest(pinNumVal, user, selectedGem)
/* }) */

useWhiteGem.addEventListener("click", function () {
    let selectedGem = "White"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingwhite")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useShieldGem.addEventListener("click", function () {
    let selectedGem = "Shield"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingshield")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useArrowGem.addEventListener("click", function () {
    let selectedGem = "Arrow"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingarrow")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useSwordGem.addEventListener("click", function () {
    let selectedGem = "Sword"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingsword")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useHatGem.addEventListener("click", function () {
    let selectedGem = "Hat"
    let display = document.getElementById("display")
    let geming = document.getElementById("geminghat")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useOrbGem.addEventListener("click", function () {
    let selectedGem = "Orb"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingorb")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

useTeleGem.addEventListener("click", function () {
    let selectedGem = "Tele"
    let display = document.getElementById("display")
    let geming = document.getElementById("gemingtele")


    display.innerHTML = "<h1>You chose to use:</h1>"
    geming.style.border = "7px solid navy";
    /* geming.innerHTML = "<img src=" + redurl + " style=" + size + ">"
    alert (geming.innerHTML) */
    redGem.disabled = true
    blueGem.disabled = true
    greenGem.disabled = true

    whiteGem.disabled = true
    shieldGem.disabled = true
    arrowGem.disabled = true
    swordGem.disabled = true
    hatGem.disabled = true
    orbGem.disabled = true
    teleGem.disabled = true
    /* defend.disabled = true */
    enterBtn.disabled = true

    sendRequest(user, selectedGem)
})

function sendRequest(getUser, getGem) {
    let url = 'https://api.sheety.co/19ddee0378e78668a6c627707586f1b6/gems/selected';
    let body = {
        selected: {
            //pin: getPin,  
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



function enableBtns() {

    let redGem = document.getElementById("redGem")
    let blueGem = document.getElementById("blueGem")
    let greenGem = document.getElementById("greenGem")
    let purpleGem = document.getElementById("purpleGem")
    /* let defend = document.getElementById("defend") */
    let whiteGem = document.getElementById("whiteGem")
    let shieldGem = document.getElementById("shieldGem")
    let arrowGem = document.getElementById("arrowGem")
    let swordGem = document.getElementById("swordGem")
    let hatGem = document.getElementById("hatGem")
    let orbGem = document.getElementById("orbGem")
    let teleGem = document.getElementById("teleGem")

    redGem.disabled = false
    blueGem.disabled = false
    greenGem.disabled = false
    purpleGem.disabled = false

    whiteGem.disabled = false
    shieldGem.disabled = false
    arrowGem.disabled = false
    swordGem.disabled = false
    hatGem.disabled = false
    orbGem.disabled = false
    teleGem.disabled = false

    /* defend.disabled = false */
    enterBtn.disabled = true

}