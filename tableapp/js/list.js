let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    //console.log("refreshNowBtn clicked")
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from the sheety api
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gRemarks = json.bookings[i].remarks;
                let gId = json.bookings[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                row.insertCell(3).innerHTML = gPax
                row.insertCell(4).innerHTML = gRemarks
                row.insertCell(5).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)




            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    //console.log(el.id + "clicked!")
                    let theId = el.id.replace("delete", "")
                    //console.log(theId)
                    DeleteBooking(theId)
                })
            }


        });
}

function DeleteBooking(id) {
    //console.log("receive id = " + id)
    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/bookingApp/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })

        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
            //console.log('Object deleted');
        });
}