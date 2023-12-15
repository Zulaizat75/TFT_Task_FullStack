var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener("input", ()=>{
    if(pass.value.length > 0){
        msg.style.display = "block"
    }else{
        msg.style.display = "none"
    };
    if (pass.value.length < 4){
        str.innerHTML = "weak"
        pass.style.borderColor = "red"
        msg.style.color = "red"
    }
    else if (pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "medium"
        pass.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }
    else if (pass.value.length >= 8){
        str.innerHTML = "strong"
        pass.style.borderColor = "green"
        msg.style.color = "green"
    }
})

let eyeicon = document.getElementById("eyeicon")
function eyeicon1(){
    if (password.type == "password"){
        password.type = "text"
        eyeicon.src = "eye-open.png"
    } else{
        password.type = "password"
        eyeicon.src = "eye-close.png"
    }
}