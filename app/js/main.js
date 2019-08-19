var buttonMenu = document.getElementById("menu-bar-btn");
var menuBarContainer = document.getElementById("menu-bar");
var menuitem = document.querySelectorAll(".main-menu .list-group .list-group-item");
var adsTypeItem = document.querySelectorAll(".choose-ads-type");
var menuAcitved = document.querySelector("#menu-bar .main-menu .list-group .list-group-item.active");
var menuitemHover = null;
var menuitemActive = null;
var menuOverlayActive = null;
var formWizardTracker = document.querySelector(".form-wizard-tracker");

var mainContainerWrapper = document.getElementById("main-content-wrapper");
var mainPrelaoding = document.getElementById("main-preloading");

init();

menuitem.forEach(function(el, i){
	el.addEventListener("mouseover", function(){
        hoverMenuItem(i, el)
    })
    
    el.addEventListener("mouseleave", resetMenuItem);
    
    el.addEventListener("click", activeMenuItem)
})

function init() {
    addMenuEffect();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip("enable");
    })
    
    menuitemActive.style.top = menuAcitved.offsetTop + "px";
    
    buttonMenu.addEventListener("click", fnActiveMenuBar);
    formWizard(false);

    adsTypeFun();
    console.log("init");

    window.addEventListener("resize", onWindowResize);
}

function addMenuEffect() {
    var warapper = menuBarContainer.querySelector(".main-menu .list-group");

    var hoverspan = document.createElement("span");
    hoverspan.setAttribute("class", "hover");
    warapper.appendChild(hoverspan);

    var activespan = document.createElement("span");
    activespan.setAttribute("class", "active-item");
    warapper.appendChild(activespan);

    var overlayspan = document.createElement("span");
    overlayspan.setAttribute("id", "menu-bar-overlay");
    overlayspan.style.display = "none";
    overlayspan.addEventListener("click", fnActiveMenuBar);
    menuBarContainer.parentElement.appendChild(overlayspan);

    menuitemHover = document.querySelector("#menu-bar .main-menu .list-group .hover");
    menuitemActive = document.querySelector("#menu-bar .main-menu .list-group .active-item");
    menuOverlayActive = document.querySelector("#menu-bar-overlay");
}

function adsTypeFun(){
    console.log("ok")
    if (adsTypeItem) {
        adsTypeItem.forEach(function (el, i) {
            el.addEventListener("click", chooseAdsType);
            console.log(el)
        })
    }
}

function chooseAdsType() {
    var wrapper = this;
    var checkbox = wrapper.querySelector('input');
    checkbox.checked = !checkbox.checked;
    if(checkbox.checked){
        wrapper.querySelector(".card-ads-type").classList.add("active");
    }else{
        wrapper.querySelector(".card-ads-type").classList.remove("active");
    }
    console.log(checkbox.checked);

}

function fnActiveMenuBar() {
    var isExpand = menuBarContainer.getAttribute("data-menu-expand");
    var isSmallSreen = (document.body.clientWidth < 1390) ? true : false;
    
    if(isExpand == "true"){
        isExpand = "false";
        menuBarContainer.classList.remove("active");
        $(function () {
            $('[data-toggle="tooltip"]').tooltip("enable");
        })
        formWizard(false);
        setTimeout(function(){
            menuOverlayActive.style.display = "none";
        }, 250)
        menuOverlayActive.classList.remove("active");

        if(isSmallSreen){
            mainContainerWrapper.classList.remove("preloading-active");
        }
    }else{
        isExpand = "true";
        menuBarContainer.classList.add("active");
        $(function () {
            $('[data-toggle="tooltip"]').tooltip("disable")
        })
        formWizard(true);
        menuOverlayActive.style.display = "block";
        menuOverlayActive.classList.add("active");

        if(isSmallSreen){
            mainContainerWrapper.classList.add("preloading-active");
        }

    }
    
    menuBarContainer.setAttribute("data-menu-expand",isExpand );

}

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
    console.log("leave")
    menuitemHover.style.opacity = "0";
    menuitem.forEach(function(el, i){
        el.style.borderRadius = "10px";
    })

    menuitemActive.style.borderRadius = "10px";
    menuitemHover.style.borderRadius = "10px ";

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
        var isExpand = menuBarContainer.getAttribute("data-menu-expand");
        var isSmallSreen = (document.body.clientWidth < 1390) ? true : false;

        if(isExpand !== "true"){ // false
            mainContainerWrapper.classList.remove("preloading-active");
        }else{ // true
            if (!isSmallSreen) {
                mainContainerWrapper.classList.remove("preloading-active");
            }
        }
        setTimeout(function(){
            mainPrelaoding.classList.remove("active");
        }, 350)
    }
}

function onWindowResize() {
    var isExpand = menuBarContainer.getAttribute("data-menu-expand");
    var isSmallSreen = (document.body.clientWidth < 1390) ? true : false;
    if(isExpand == "true"){
        if(isSmallSreen){
            mainContainerWrapper.classList.add("preloading-active");
        }else{
            mainContainerWrapper.classList.remove("preloading-active");
        }
    }
}
