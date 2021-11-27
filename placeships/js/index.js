var lastClicked;
var number;
var target;
/* var gotPin = 0; */
var onMap = "On Red Map";

var hitMiss = "Miss";
/* let enterBtn = document.getElementById("enter"); */
/* url = "https://drive.google.com/file/d/1nyXvAJYNFpj_bUB8zX7yWcCYWkzX_QJV/view" */
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
    redTitle.style = "background:rgba(128, 128, 128, 0.6); color:white"
    redTitle.colSpan = 4
    redTitle.innerHTML = "Place 1 Battleship on Map"
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
    /* var btn1 = createDiv.appendChild(document.createElement('button'));
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
    btn4.innerHTML = "Mark as not Targeted" */
    var btn3 = createDiv.appendChild(document.createElement('button'));
    btn3.setAttribute("id", "btn3")
    btn3.className = "btn btn-success"
    btn3.innerHTML = "Confirm Ship Location!"
    /* btn3.onclick = "showPopup()" */
    btn3.addEventListener('click', function(){
        document.getElementById("popup").style.display = "block";
        
    })

    /* btn4.addEventListener('click', function(){
        displayEmpty(number)
        
    })

    btn2.addEventListener('click', function(){
        displayMiss(number)
        
    })

    btn1.addEventListener('click', function(){
        displayHit(number)
        
    }) */
    
    return createDiv;

}



function displayShip(getNumber) {

    var x = getNumber - 1
    x = Math.floor(x / 5)
    var y = getNumber - (x * 5) - 1
    
        var updTable = document.getElementById("tbl");
        updTable.rows[x].cells[y].innerHTML = ""
        var img = document.createElement('img');
        img.src = "https://cdn4.iconfinder.com/data/icons/battlefield-3/340/battleship_warship_cannon_military_marine_ocean_battle-1024.png";
        img.style = "width:35px;height:35px"
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

    if (pinNumVal == 3578) {
        /* helloplayer.innerHTML = "<h5>Hello Micah Ng!</h5>" */
        user = "Micah Ng"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 9035) {
        /* helloplayer.innerHTML = "<h5>Hello Lai Xin Rui!</h5>" */
        user = "Lai Xin Rui"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 1029) {
        /* helloplayer.innerHTML = "<h5>Hello Ethan Tan!</h5>" */
        user = "Ethan Tan"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 6588) {
        /* helloplayer.innerHTML = "<h5>Hello Tee Jun Yao!</h5>" */
        user = "Tee Jun Yao"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 1072) {
        /* helloplayer.innerHTML = "<h5>Hello Joshua Lu!</h5>" */
        user = "Joshua Lu"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 4084) {
        /* helloplayer.innerHTML = "<h5>Hello Hayyan!</h5>" */
        user = "Hayyan"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 9852) {
        /* helloplayer.innerHTML = "<h5>Hello Luis Khoo!</h5>" */
        user = "Luis Khoo"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 5691) {
        /* helloplayer.innerHTML = "<h5>Hello Jaivi!</h5>" */
        user = "Jaivi"
        sendTarget(user, number)
        gotPin = 1
        return
    }

    if (pinNumVal == 3839) {
        /* helloplayer.innerHTML = "<h5>Hello Sin Zi Feng!</h5>" */
        user = "Sin Zi Feng"
        sendTarget(user, number)
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

function sendTarget (getUser, getTarget) {
    /* var dBtn = document.getElementById("btn3") */
    var dBtn = document.getElementById("btn3");
    dBtn.disabled = true
    /* var dBtn2 = document.getElementById("btn2");
    dBtn2.disabled = true */
    /* var dBtn1 = document.getElementById("btn1");
    dBtn1.disabled = true */
    /* var dBtn4 = document.getElementById("btn4");
    dBtn4.disabled = true */
    
    let url = 'https://api.sheety.co/f58c5155bb3bf220e75ddee2fefba7ce/ships/place';
    let body = {
        place: {
            //pin: getPin,  
            name: getUser,
            location: getTarget
            //onmap: getMap
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


            alert(getUser + " have placed a ship at coordinate: <" + getTarget + "> !")
            /* dBtn.disabled = false
            dBtn1.disabled = false
            dBtn2.disabled = false
            dBtn4.disabled = false */
            displayShip(getTarget);


        });

        gotPin = 0;
        
}


