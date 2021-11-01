let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value



    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)

})

function BookNow(userName, userEmail, userPax, userRemarks){
    //console.log(userName)
    //console.log(userEmail)
    //console.log(userPax)
    //console.log(userRemarks)

    let url = 'https://api.sheety.co/324c86a5ead7df3839b2d61d45d3baec/bookingApp/bookings';
    let body = {
      booking: {
        name: userName,
        email: userEmail,
        pax: userPax,
        remarks: userRemarks
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
      console.log(json.booking);
      
    alert(json.booking.name + "added in the list!")
      

    });
}