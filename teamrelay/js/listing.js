//var delay = 2000;
//var els = document.getElementById("refreshNow");
//var els2 = document.getElementById("testBtn");
var loader = document.getElementById('loading');

//let testBtn = document.getElementById("testBtn")
//testBtn.addEventListener("click", function () {
//alert("clicked")

//var source = els2.target || els2.srcElement;
//e.preventDefault();        
//loader.className = loader.className.replace('hidden', '');

//setTimeout(function() {             
//   window.open(source.href);            
//loader.className += 'hidden';
//}, delay);
//}, false);
//test button end here


let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    //alert("refreshNowBtn clicked")
    //var source2 = els.target || els.srcElement;
    //e.preventDefault();        


    GetData()
})

let filterNowBtn = document.getElementById("filterNow")
filterNowBtn.addEventListener("click", function () {

    //let selRound = document.getElementById("roundNum").value
    //alert(selRound)
    FilterData()
})

function GetData() {
    loader.className = loader.className.replace('hidden', ''); 

    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/teamRelay/results';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.results);
            //alert(json.results);

            let dataTable = document.getElementById("dataTable")
            let recordIds = [] // this is for the delete buttons
            let ttlTimeR = 0
            let ttlRoundR = 0
            let ttlPenaltyR = 0
            let ttlTimeB = 0
            let ttlRoundB = 0
            let ttlPenaltyB = 0
            let ttlTimeG = 0
            let ttlRoundG = 0
            let ttlPenaltyG = 0

            //delete all rows in the table
            for (let k = dataTable.rows.length - 1; k > 0; k--) {
                dataTable.deleteRow(k)
            }

            //load all rows from the sheety api
            for (let i = 0; i < json.results.length; i++) {
                let gRound = json.results[i].round;
                let gTeam = json.results[i].team;
                let gName = json.results[i].name;
                let gResult = json.results[i].result;
                let gPenalty = json.results[i].penalty;
                let gId = json.results[i].id;
                let btnId = "delete" + gId;

                //create the delete button for each row
                let row = dataTable.insertRow(dataTable.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gRound
                row.insertCell(2).innerHTML = gTeam
                row.insertCell(3).innerHTML = gName
                row.insertCell(4).innerHTML = gResult
                row.insertCell(5).innerHTML = gPenalty
                row.insertCell(6).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                recordIds.push(btnId)

                if (gTeam == "Red") {
                    //alert("Did it run " + gTeam + "?")
                    ttlTimeR += parseFloat(gResult)
                    ttlRoundR += 1
                    ttlPenaltyR += parseInt(gPenalty)

                }

                if (gTeam == "Blue") {
                    ttlTimeB += gResult
                    ttlRoundB += 1
                    ttlPenaltyB += gPenalty

                }

                if (gTeam == "Green") {
                    ttlTimeG += gResult
                    ttlRoundG += 1
                    ttlPenaltyG += gPenalty

                }

            }


            //Listener for all the delete buttons
            for (let j = 0; j < recordIds.length; j++) {
                let el = document.getElementById(recordIds[j])
                el.addEventListener("click", function () {
                    //alert(el.id + "clicked!")
                    let theId = el.id.replace("delete", "")
                    //alert(theId)
                    DeleteRecord(theId)
                })
            }

            loader.className += 'hidden';
            //document.getElementById("refreshNow").scrollIntoView({
             //   behavior: 'auto',
              //  block: 'center',
               // inline: 'center'
            //})
            LoadTotals(ttlTimeR, ttlRoundR, ttlPenaltyR, ttlTimeB, ttlRoundB, ttlPenaltyB, ttlTimeG, ttlRoundG, ttlPenaltyG)
        });
    //alert("at the bottom")

}

function FilterData() {
    loader.className = loader.className.replace('hidden', ''); 

    let selRound = document.getElementById("roundNum").value
    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/teamRelay/results?filter[round]=' + selRound;
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.results);
            //alert(json.results);

            let dataTable = document.getElementById("dataTable")
            let recordIds = [] // this is for the delete buttons
            let ttlTimeR = 0
            let ttlRoundR = 0
            let ttlPenaltyR = 0
            let ttlTimeB = 0
            let ttlRoundB = 0
            let ttlPenaltyB = 0
            let ttlTimeG = 0
            let ttlRoundG = 0
            let ttlPenaltyG = 0

            //delete all rows in the table
            for (let k = dataTable.rows.length - 1; k > 0; k--) {
                dataTable.deleteRow(k)
            }

            //load all rows from the sheety api
            for (let i = 0; i < json.results.length; i++) {
                let gRound = json.results[i].round;
                let gTeam = json.results[i].team;
                let gName = json.results[i].name;
                let gResult = json.results[i].result;
                let gPenalty = json.results[i].penalty;
                let gId = json.results[i].id;
                let btnId = "delete" + gId;

                let row = dataTable.insertRow(dataTable.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gRound
                row.insertCell(2).innerHTML = gTeam
                row.insertCell(3).innerHTML = gName
                row.insertCell(4).innerHTML = gResult
                row.insertCell(5).innerHTML = gPenalty
                row.insertCell(6).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                recordIds.push(btnId)

                if (gTeam == "Red") {
                    //alert("Did it run " + gTeam + "?")
                    ttlTimeR += parseFloat(gResult)
                    ttlRoundR += 1
                    ttlPenaltyR += parseInt(gPenalty)

                }

                if (gTeam == "Blue") {
                    ttlTimeB += gResult
                    ttlRoundB += 1
                    ttlPenaltyB += gPenalty

                }

                if (gTeam == "Green") {
                    ttlTimeG += gResult
                    ttlRoundG += 1
                    ttlPenaltyG += gPenalty

                }
            }

            //Listener for all the delete buttons
            for (let j = 0; j < recordIds.length; j++) {
                let el = document.getElementById(recordIds[j])
                el.addEventListener("click", function () {
                    //alert(el.id + "clicked!")
                    let theId = el.id.replace("delete", "")
                    //alert(theId)
                    DeleteRecord2(theId)
                })
            }

            loader.className += 'hidden';
            //alert(ttlTimeR)
            //alert(ttlRoundR)
            //alert(ttlPenaltyR)
            LoadTotals(ttlTimeR, ttlRoundR, ttlPenaltyR, ttlTimeB, ttlRoundB, ttlPenaltyB, ttlTimeG, ttlRoundG, ttlPenaltyG)
        });
    //alert("at the bottom")

}

function DeleteRecord(id) {
    //console.log("receive id = " + id)
    window.scrollTo(0, 0);
    loader.className = loader.className.replace('hidden', '');
    let view = id - 1

    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/teamRelay/results/' + id;
    fetch(url, {
        method: 'DELETE',
    })

        .then(() => {
            loader.className += 'hidden';
            alert("Record id " + id + " deleted!")
            
            GetData()
            document.getElementById("delete" + view).scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
            //console.log('Object deleted');
        });
}

function DeleteRecord2(id) {
    //console.log("receive id = " + id)
    window.scrollTo(0, 0);
    loader.className = loader.className.replace('hidden', '');
    let view = id - 1

    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/teamRelay/results/' + id;
    fetch(url, {
        method: 'DELETE',
    })

        .then(() => {
            loader.className += 'hidden';
            alert("Record id " + id + " deleted!")
            
            FilterData()
            document.getElementById("delete" + view).scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
            //console.log('Object deleted');
        });
}

function LoadTotals(timeR, roundR, penR, timeB, roundB, penB, timeG, roundG, penG) {
    //alert("Load total function started")
    //alert(timeR)
    //alert(roundR)
    //alert(penR)

    timeR = timeR.toFixed(3)
    timeB = timeB.toFixed(3)
    timeG = timeG.toFixed(3)

    dispTimeR = document.getElementById("ttlTimeR")
    dispRoundR = document.getElementById("ttlRoundsR")
    dispPenR = document.getElementById("ttlPenaltyR")
    dispTimeB = document.getElementById("ttlTimeB")
    dispRoundB = document.getElementById("ttlRoundsB")
    dispPenB = document.getElementById("ttlPenaltyB")
    dispTimeG = document.getElementById("ttlTimeG")
    dispRoundG = document.getElementById("ttlRoundsG")
    dispPenG = document.getElementById("ttlPenaltyG")


    dispTimeR.innerHTML = "Total Time: " + timeR
    dispRoundR.innerHTML = "Total Rounds: " + roundR
    dispPenR.innerHTML = "Total Penalty Points: " + penR

    dispTimeB.innerHTML = "Total Time: " + timeB
    dispRoundB.innerHTML = "Total Rounds: " + roundB
    dispPenB.innerHTML = "Total Penalty Points: " + penB

    dispTimeG.innerHTML = "Total Time: " + timeG
    dispRoundG.innerHTML = "Total Rounds: " + roundG
    dispPenG.innerHTML = "Total Penalty Points: " + penG

}