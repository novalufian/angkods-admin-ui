var morebtn = document.querySelectorAll(".btn-more-table");

init();

function init(){
    initBtnMore();
}

function initBtnMore() {
    if (morebtn) {
        morebtn.forEach(function (el, i) {
            el.addEventListener("click", showBtmMore)
        })
    }
}

function showBtmMore() {
    var btn = this;
    var i = btn.querySelector("i");
    var more = btn.nextElementSibling;

    console.log(more)
    
    var isShow = (btn.getAttribute("data-more-show") == "false") ? false : true;
    if (isShow) {
    var i = btn.querySelector("i");
        i.setAttribute("class", "fas fa-ellipsis-v");
        btn.setAttribute("data-more-show", false);
        more.classList.remove("active");
    }else{
        i.setAttribute("class", "fas fa-times");
        btn.setAttribute("data-more-show", true);
        more.classList.add("active");
    }
}