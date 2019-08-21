var formInputCheckBox = document.querySelectorAll(".form-group.checkbox");

init();

function init(){
    checkBox();
}

function checkBox(){
    if(formInputCheckBox){
        formInputCheckBox.forEach(function(el, index){
            el.addEventListener("click", togleCheckbox)
        })
    }
}

function togleCheckbox(){
    console.log(this);
    var ckbx = this;
    var input = ckbx.querySelector('input[type="checkbox"]');
    var icon = ckbx.querySelector(".form-checkbox");
    var text = ckbx.querySelector(".text");
    var textColor = icon.getAttribute("data-color");

    input.checked = !input.checked;
    if(input.checked){
        icon.classList.remove("uncheck", "far");
        icon.classList.add("checked", "fas", "text-"+ textColor);
        text.classList.add("text-"+textColor);

    }else{
        icon.classList.remove("checked", "fas", "text-"+ textColor);
        icon.classList.add("uncheck", "far");
        text.classList.remove("text-"+textColor);

    }
    console.log(input.checked);
}