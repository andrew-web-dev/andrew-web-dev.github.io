var lastClicked;
var number;
var target;
/* var gotPin = 0; */
var onMap = "On Blue Map";

var hitMiss = "Miss";
/* let enterBtn = document.getElementById("enter"); */
url = "https://drive.google.com/file/d/1nyXvAJYNFpj_bUB8zX7yWcCYWkzX_QJV/view"
/* enterBtn.addEventListener("click", function () {
    window.open(url, "_blank");
}) */


var grid = clickableGrid(5, 5, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    if (lastClicked) lastClicked.className = '';
    lastClicked = el;
    number = i

    /* if (i == 15){
        alert("play hit video")
    } */
});


let a = createButtonGroup();
/* let b = createButton2(); */

document.body.appendChild(grid);


document.body.appendChild(a);
/* document.body.appendChild(b); */



function clickableGrid(rows, cols, callback) {
    var i = 0;
    var grid = document.createElement('table');
    grid.setAttribute("id", "tbl")
    grid.className = 'grid';
    grid.style = "color:white"
    redTitle = grid.appendChild(document.createElement('th'))
    redTitle.style = "background:rgba(0, 0, 255, 0.6); color:white"
    redTitle.colSpan = 3
    redTitle.innerHTML = "Blue Team's Map"
    for (var r = 0; r < rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0; c < cols; ++c) {
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.addEventListener('click', (function (el, r, c, i) {
                return function () {
                    callback(el, r, c, i);
                }
            })(cell, r, c, i), false);
        }
    }
    return grid;
}


function createButtonGroup() {

    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", "grp1")
    createDiv.className = "btn-group-vertical"
    var btn1 = createDiv.appendChild(document.createElement('button'));
    btn1.setAttribute("id", "btn1")
    btn1.className = "btn btn-success"
    btn1.innerHTML = "Mark as Hit"
    var btn2 = createDiv.appendChild(document.createElement('button'));
    btn2.setAttribute("id", "btn2")
    btn2.className = "btn btn-dark"
    btn2.innerHTML = "Mark as Miss"
    var btn4 = createDiv.appendChild(document.createElement('button'));
    btn4.setAttribute("id", "btn4")
    btn4.className = "btn btn-secondary"
    btn4.innerHTML = "Mark as not Targeted"
    var btn3 = createDiv.appendChild(document.createElement('button'));
    btn3.setAttribute("id", "btn3")
    btn3.className = "btn btn-danger"
    btn3.innerHTML = "Send Target to Central Command!"
    /* btn3.onclick = "showPopup()" */
    btn3.addEventListener('click', function(){
        document.getElementById("popup").style.display = "block";
        
    })

    btn4.addEventListener('click', function(){
        displayEmpty(number)
        
    })

    btn2.addEventListener('click', function(){
        displayMiss(number)
        
    })

    btn1.addEventListener('click', function(){
        displayHit(number)
        
    })
    /* createdbtn.innerHTML = "Launch Missile to Attack Red Team!" */
    /* createdbtn.addEventListener('click', function () {

        if (number == 4) {
            alert("Hit")
            hitMiss = "Hit"
            displayResult(number, hitMiss)


        } 
        else if (number == 9) {
            alert("Hit")
            hitMiss = "Hit"
            displayResult(number, hitMiss)


        }
        else if (number == 23) {
            alert("Hit")
            hitMiss = "Hit"
            displayResult(number, hitMiss)


        }
        else if (number == 25) {
            alert("Hit")
            hitMiss = "Hit"
            displayResult(number, hitMiss)


        }else if (number == 2) {
            alert("Hit")
            hitMiss = "Hit"
            displayResult(number, hitMiss)


        } else {
            alert("Miss")
            displayResult(number, hitMiss)

        }
    
    }); */
    return createDiv;

}


function displayMiss(getNumber) {

    var x = getNumber - 1
    x = Math.floor(x / 5)
    var y = getNumber - (x * 5) - 1
    
        var updTable = document.getElementById("tbl");
        updTable.rows[x].cells[y].innerHTML = ""
        var img = document.createElement('img');
        img.src = "https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_055_delete_cross_close_cancel_exit_vote-1024.png";
        img.style = "width:30px;height:30px"
        updTable.rows[x].cells[y].appendChild(img)

}

function displayHit(getNumber) {

    var x = getNumber - 1
    x = Math.floor(x / 5)
    var y = getNumber - (x * 5) - 1
    
        var updTable = document.getElementById("tbl");
        updTable.rows[x].cells[y].innerHTML = ""
        var img = document.createElement('img');
        img.src = "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-256.png";
        img.style = "width:30px;height:30px"
        updTable.rows[x].cells[y].appendChild(img)
        
}

function displayEmpty(getNumber) {

    var x = getNumber - 1
    x = Math.floor(x / 5)
    var y = getNumber - (x * 5) - 1
    
        var updTable = document.getElementById("tbl");
        updTable.rows[x].cells[y].innerHTML = getNumber;
        /* var img = document.createElement('img');
        img.src = "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-256.png";
        img.style = "width:30px;height:30px"
        updTable.rows[x].cells[y].appendChild(img) */
        
}

function done() { 
    document.getElementById("popup").style.display = "none";
    var pinNumVal = document.getElementById("pass").value;
    var gotPin = 0;
    

    /* alert("got pin = " + gotPin) */
    if (isNaN(number)){
        alert("Target coordinate not selected! Please try again!");
        return

    }

    if (pinNumVal == 1198) {
        /* helloplayer.innerHTML = "<h5>Hello Loo Kingsley!</h5>" */
        user = "Loo Kingsley"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 8768) {
        /* helloplayer.innerHTML = "<h5>Hello Kaely!</h5>" */
        user = "Kaely Tong"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 2167) {
        /* helloplayer.innerHTML = "<h5>Hello Ke Xuan!</h5>" */
        user = "Ke Xuan"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 4162) {
        /* helloplayer.innerHTML = "<h5>Hello Justen!</h5>" */
        user = "Justen"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 8972) {
        /* helloplayer.innerHTML = "<h5>Hello Cheng Eu!</h5>" */
        user = "Cheng Eu"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 3506) {
        /* helloplayer.innerHTML = "<h5>Hello Chun Kit!</h5>" */
        user = "Chun Kit"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 2830) {
        /* helloplayer.innerHTML = "<h5>Hello Casey!</h5>" */
        user = "Casey"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 7051) {
        /* helloplayer.innerHTML = "<h5>Hello Ke Nuo!</h5>" */
        user = "Ke Nuo"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 9073) {
        /* helloplayer.innerHTML = "<h5>Hello Chun Pin!</h5>" */
        user = "Chun Pin"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 7809) {
        /* helloplayer.innerHTML = "<h5>Hello Joshua Wong!</h5>" */
        user = "Joshua Wong"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 2105) {
        /* helloplayer.innerHTML = "<h5>Hello Jin Hao!</h5>" */
        user = "Jin Hao"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 5086) {
        /* helloplayer.innerHTML = "<h5>Hello Ee Dong!</h5>" */
        user = "Ee Dong"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (pinNumVal == 3583) {
        /* helloplayer.innerHTML = "<h5>Hello Jia Hang!</h5>" */
        user = "Jia Hang"
        sendTarget(user, number, onMap)
        gotPin = 1
        return
    }

    if (gotPin == 0) {
        alert ("Wrong Pin Number Entered! Please try again!")
        return
    }


};

/* function showPopup() {
    
    alert("sucess")
} */

function sendTarget (getUser, getTarget, getMap) {
    /* var dBtn = document.getElementById("btn3") */
    var dBtn = document.getElementById("btn3");
    dBtn.disabled = true
    var dBtn2 = document.getElementById("btn2");
    dBtn2.disabled = true
    var dBtn1 = document.getElementById("btn1");
    dBtn1.disabled = true
    var dBtn4 = document.getElementById("btn4");
    dBtn4.disabled = true
    
    let url = 'https://api.sheety.co/85bb3100f0a1f1cdedd7a40befe6e03d/battleships/missile';
    let body = {
        missile: {
            //pin: getPin,  
            name: getUser,
            target: getTarget,
            onmap: getMap
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


            alert(getUser + " sent missile target coordinate: <" + getTarget + "> to Central Command!")
            dBtn.disabled = false
            dBtn1.disabled = false
            dBtn2.disabled = false
            dBtn4.disabled = false
            displayMiss(getTarget);


        });

        gotPin = 0;
        
}
