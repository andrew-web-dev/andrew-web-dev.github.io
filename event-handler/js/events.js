function transformUppercase(_val){
    return _val.toUpperCase();
}

//DOM event listener
let elnamaPenguna = document.getElementById("namaPenguna")
elnamaPenguna.addEventListener("keyup", function(){
    elnamaPenguna.value = transformUppercase(elnamaPenguna.value)
})

function checkPassword(){
    let elkatalaluan = document.getElementById("kataLaluan")
    let pass_val = elkatalaluan.value

    if(pass_val.length > 5){
        alert("Password check... ok!")
    } else {
        alert("Password too short!")
    }
}

//traditional DOM event handler
let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword
