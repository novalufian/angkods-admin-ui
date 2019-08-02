var buttonMenu = document.getElementById("menu-bar-btn");
var menuBarContainer = document.getElementById("menu-bar");
var menuitem = document.querySelectorAll(".main-menu .list-group .list-group-item");
var menuitemHover = document.querySelector("#menu-bar .main-menu .list-group .hover");
var menuAcitved = document.querySelector("#menu-bar .main-menu .list-group .list-group-item.active");
var menuitemActive = document.querySelector("#menu-bar .main-menu .list-group .active-item");
var formWizardTracker = document.querySelector(".form-wizard-tracker");

var mainContainerWrapper = document.getElementById("main-content-wrapper");
var mainPrelaoding = document.getElementById("main-preloading");

init();

function init() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip("enable");
    })
    
    menuitemActive.style.top = menuAcitved.offsetTop + "px";
    
    buttonMenu.addEventListener("click", fnActiveMenuBar);
    formWizard(false);
}

function fnActiveMenuBar() {
    var isExpand = menuBarContainer.getAttribute("data-menu-expand");
    
    if(isExpand == "true"){
        isExpand = "false";
        menuBarContainer.classList.remove("active");
        $(function () {
            $('[data-toggle="tooltip"]').tooltip("enable");
        })
        formWizard(false);

    }else{
        isExpand = "true";
        menuBarContainer.classList.add("active");
        $(function () {
            $('[data-toggle="tooltip"]').tooltip("disable")
        })
        formWizard(true);
    }
    
    menuBarContainer.setAttribute("data-menu-expand",isExpand );
}

menuitem.forEach(function(el, i){
	el.addEventListener("mouseover", function(){
        hoverMenuItem(i, el)
    })
    
    el.addEventListener("mouseleave", resetMenuItem);
    
    el.addEventListener("click", activeMenuItem)
})

function hoverMenuItem(i, el){
    var activeEl = menuActiveIndex();
    menuitemActive.style.borderRadius = " 10px";
    menuitemHover.style.top = el.offsetTop + "px";
    menuitemHover.style.borderRadius = "10px ";
    menuitemHover.style.opacity = "1";
    
    if(i+1 == activeEl){
        menuitemActive.style.borderRadius = "0 0 10px 10px";
        menuitemHover.style.borderRadius = " 10px 10px 0 0";
        
    }else if(i-1 == activeEl){
        menuitemActive.style.borderRadius = "10px 10px 0 0";
        menuitemHover.style.borderRadius = "0 0 10px 10px ";
    }
}

function menuActiveIndex(){
    for (let index = 0; index < menuitem.length; index++) {
        if(menuitem[index].classList.contains("active")){
            return index;
            break;
        }
    }
}

function resetMenuItem() {
    menuitemHover.style.opacity = "0";
    menuitem.forEach(function(el, i){
        el.style.borderRadius = "10px";
    })
}

function activeMenuItem(){
    console.log("click active")
    menuitem.forEach(function(el, i){
        el.classList.remove("active");
    })
    
    console.log(this)
    
    this.classList.add("active");
    menuitemActive.style.top = this.offsetTop + "px";
    resetMenuItem();

    preloading(true);
}


function formWizard(isTrue) {
    var leftV = (isTrue) ? 250 : 75;
    if(formWizardTracker){
        formWizardTracker.style.width = `calc(100% - ${leftV}px)`;
    }
}

function preloading(isTrue) {
    if(isTrue){
        mainPrelaoding.classList.add("active");
        setTimeout(function () {
            mainContainerWrapper.classList.add("preloading-active");

            setTimeout(function(){
                preloading(false)
            }, 2000)
        }, 350);
    }else{
        setTimeout(function(){
            mainPrelaoding.classList.remove("active");
        }, 350)
        mainContainerWrapper.classList.remove("preloading-active");
    }
}
