var buttonMenu = document.getElementById("menu-bar-btn");
var menuBarContainer = document.getElementById("menu-bar");

buttonMenu.addEventListener("click", fnActiveMenuBar);

function fnActiveMenuBar() {
    var isExpand = menuBarContainer.getAttribute("data-menu-expand");

    if(isExpand == "true"){
        isExpand = "false";
        menuBarContainer.classList.remove("active");
    }else{
        isExpand = "true";
        menuBarContainer.classList.add("active")
    }

    menuBarContainer.setAttribute("data-menu-expand",isExpand );
}

fnActiveMenuBar()