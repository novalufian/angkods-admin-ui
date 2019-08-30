var btnChange = document.querySelectorAll(".change-page");
var gateway = document.querySelector("#gateway-sparator");

init();

function init(){
    btnChange.forEach(function(el, i){
        el.addEventListener("click", changeLoginPage);
    })
}

function changeLoginPage() {
    var isRigth = gateway.classList.contains("right");
    console.log(isRigth);
    if(isRigth){
        gateway.classList.remove("right");
    }else{
        gateway.classList.add("right");
    }
}