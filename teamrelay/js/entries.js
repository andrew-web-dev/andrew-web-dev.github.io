//let testToolbar = document.getElementById("btnGroup1")
//testToolbar.addEventListener("click", function(){
    
    //testToolbar.addClass('active').siblings().removeClass('active');

//    alert("Clicked Round " + testToolbar.value)

//})
//Display selected round number and put in Variable (button group bootstrap)

//Button Group (Round number)
var num = null;
var ele = document.querySelectorAll(".btn-group > button.btn");
for(var i=0; i<ele.length; i++){
    ele[i].addEventListener("click", function(){
        num = +this.value;
        alert("Round " + num + " selected!");
        let roundLable = document.getElementById("roundLabel")
        roundLable.innerHTML = "Please select Round: (Round " + num + " Selected)"
        ele[num - 1].focus()
    });
}

let checkBlankName = document.getElementById("stacker")
checkBlankName.addEventListener("click", function(){
    checkBlankName.focus()
    if (checkBlankName.options[checkBlankName.selectedIndex].text == ""){
        //alert("Name cannot be blank")
        let quickGetTeam = document.getElementById("team")
        let gotTeam = quickGetTeam.options[quickGetTeam.selectedIndex].text

        LoadMembers(gotTeam)
        checkBlankName.selectedIndex = 0
        
    }
})

let checkBlankName2 = document.getElementById("stacker")
checkBlankName.addEventListener("change", function(){
    if (checkBlankName2.options[checkBlankName.selectedIndex].text == ""){
        //alert("Name cannot be blank")
        //let quickGetTeam = document.getElementById("team")
        //let gotTeam = quickGetTeam.options[quickGetTeam.selectedIndex].text

        //LoadMembers(gotTeam)
        checkBlankName.selectedIndex = 0
        
    }
})

// Lost Focus and Get Focus Section
let lostFocus = document.getElementById("penalty")
lostFocus.addEventListener("blur", function(){
    ele[num - 1].focus()
})

let lostFocus2 = document.getElementById("result")
lostFocus2.addEventListener("blur", function(){
    ele[num - 1].focus()
})

let lostFocus3 = document.getElementById("stacker")
lostFocus3.addEventListener("blur", function(){
    ele[num - 1].focus()
})

let lostFocus4 = document.getElementById("team")
lostFocus4.addEventListener("blur", function(){
    ele[num - 1].focus()
})


//ele[num -1].addEventListener("blur", function(){
    //alert("Hello")
    //ele[num - 1].focus()
//})

let getFocus = document.getElementById("penalty")
getFocus.addEventListener("click", function(){
    getFocus.focus()
})

let getFocus2 = document.getElementById("result")
getFocus2.addEventListener("click", function(){
    getFocus2.focus()
})


var loader = document.getElementById('loading');

//var delay = 2000;
//Test Button
//let testBtn = document.getElementById("testBtn")
//testBtn.addEventListener("click", function () {
  //alert("clicked")
  //let testnum = 12.000000002222201
  //testnum = testnum.toFixed(3)
  //alert(testnum)
  //if (isNaN(testnum)){
    //alert ("But its not a number")
//}
  //ele[num - 1].focus()

        //var source = els2.target || els2.srcElement;
        //e.preventDefault();        
        //loader.className = loader.className.replace('hidden', '');
        
        
        //setTimeout(function() {             
         //   window.open(source.href);            
            //loader.className += 'hidden';
            
        //}, delay);
//})
   // }, false);
//test button ends


//Load Team members "change" listener
let selectedTeam = document.getElementById("team")
selectedTeam.addEventListener("change", function(){
    //alert("Team changed!" + selectedTeam.options[selectedTeam.selectedIndex].text)
    
    let theTeam = selectedTeam.options[selectedTeam.selectedIndex].text
    LoadMembers(theTeam)

    //let member1 = document.getElementById("stacker")
    //member1.innerHTML = "<option>" + putRed1 + "</option>"

})




//save now button
let bookNowBtn = document.getElementById("save")
bookNowBtn.addEventListener("click", function(){
    let teamName = document.getElementById("team")
    let teamNameVal = teamName.value

    let stackerName = document.getElementById("stacker")
    let stackerNameVal = stackerName.value
    if (stackerNameVal == ""){
        alert ("Stacker name cannot be blank!")
        ele[num - 1].focus()
        return
    }
    //alert (num)

    let resultTime = document.getElementById("result")
    let resultTimeVal = parseFloat(resultTime.value)
    if (isNaN(resultTimeVal)){
        alert ("Please enter Result (Number only)!")
        ele[num - 1].focus()
        return;
    }

    if (resultTimeVal == 0){
        alert ("Result cannot be 0!")
        ele[num - 1].focus()
        return
    }

    let penaltyPoints = document.getElementById("penalty")
    let penaltyPointsVal = parseInt(penaltyPoints.value)
    if (isNaN(penaltyPointsVal)){
        alert ("Please enter Penalty Points (Number only)!")
        ele[num - 1].focus()
        return;
    }

    if (num == null){
        alert ("Round not selected, please select Round number!")
        return
    }

    //alert("Team " + teamNameVal)
    //alert("stacker " + stackerNameVal)
    //alert("Result " + resultTimeVal)
    //alert("Penalty " + penaltyPointsVal)
    //alert("Round " + num)
    //alert("OK!")



    SaveNow(teamNameVal, stackerNameVal, resultTimeVal, penaltyPointsVal, num)

})

function SaveNow(getTeam, getStacker, getResult, getPenalty, getRound){
    loader.className = loader.className.replace('hidden', ''); 
    //alert(getTeam)
    //alert(getStacker)
    //alert(getResult)
    //alert(getPenalty)
    //alert(getRound)
    

    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/teamRelay/results';
    let body = {
      result: {
        team: getTeam,  
        name: getStacker,
        round: getRound,
        result: getResult,
        penalty: getPenalty,
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
    
    loader.className += 'hidden';  
    alert(json.result.name + " result saved in the database!")
    ele[num - 1].focus()

    });
      

    
}

function LoadMembers(selTeam){
    if (selTeam == "Red"){
        alert ("Loaded all Red team members!")

        let member1 = document.getElementById("load1")
        let member2 = document.getElementById("load2")
        let member3 = document.getElementById("load3")
        let member4 = document.getElementById("load4")
        let member5 = document.getElementById("load5")
        

        let putMember = document.getElementById("red1").innerHTML
        
        member1.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("red2").innerHTML
        member2.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("red3").innerHTML
        member3.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("red4").innerHTML
        member4.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("red5").innerHTML
        member5.innerHTML = "<option>" + putMember + "</option>"
        

    }
    if (selTeam == "Blue"){
        alert ("Loaded all Blue team members!")
        let member1 = document.getElementById("load1")
        let member2 = document.getElementById("load2")
        let member3 = document.getElementById("load3")
        let member4 = document.getElementById("load4")
        let member5 = document.getElementById("load5")
        

        let putMember = document.getElementById("blue1").innerHTML
        
        member1.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("blue2").innerHTML
        member2.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("blue3").innerHTML
        member3.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("blue4").innerHTML
        member4.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("blue5").innerHTML
        member5.innerHTML = "<option>" + putMember + "</option>"
    }
    if (selTeam == "Green"){
        alert ("Loaded all Green team members!")
        
        let member1 = document.getElementById("load1")
        let member2 = document.getElementById("load2")
        let member3 = document.getElementById("load3")
        let member4 = document.getElementById("load4")
        let member5 = document.getElementById("load5")
        

        let putMember = document.getElementById("green1").innerHTML
        
        member1.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("green2").innerHTML
        member2.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("green3").innerHTML
        member3.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("green4").innerHTML
        member4.innerHTML = "<option>" + putMember + "</option>"
        putMember = document.getElementById("green5").innerHTML
        member5.innerHTML = "<option>" + putMember + "</option>"
        

    }
    if (selTeam == "Yellow"){
        alert ("Yellow team not in use for the moment!")
    }
}