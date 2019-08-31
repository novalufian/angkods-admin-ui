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
        gateway.classList.add("moveToLeft");
        setTimeout(() => {
            gateway.classList.add("left");
            gateway.classList.remove("moveToLeft");
        }, 510);

    }else{
        gateway.classList.remove("left");
        gateway.classList.add("moveToRight");
        gateway.classList.add("right");

        setTimeout(() => {
            gateway.classList.remove("moveToRight");
        }, 510);
    }
}