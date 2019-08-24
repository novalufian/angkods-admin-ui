var formInputCheckBox = document.querySelectorAll(".form-group.ckbx-filter");
var formInputCheckBoxTable = document.querySelectorAll(".form-group.ckbx-table");

init();

function init(){
    checkBox();
}

function checkBox(){
    if(formInputCheckBox){
        formInputCheckBox.forEach(function(el, index){
            el.addEventListener("click", togleCheckboxFilter)
        })
    }

    if(formInputCheckBoxTable){
        formInputCheckBoxTable.forEach(function(el, index){
            el.addEventListener("click", togleCheckboxTable)
        })
    }
}

function togleCheckbox(ckbx){
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
}

function togleCheckboxFilter(){
    var ckbx = this;
    togleCheckbox(ckbx);
}

function togleCheckboxTable() {
    var ckbx = this;

    togleCheckbox(ckbx);

    console.log(ckbx);
    var input = ckbx.querySelector('input[type="checkbox"]');
    var tr = ckbx.parentElement.parentElement;

    if(input.checked){
        tr.classList.add("selected");
    }else{
        tr.classList.remove("selected");
    }
    
}