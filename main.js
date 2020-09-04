function reveal_menu() {
    var brand = document.getElementById("navbar-brand");
    var button = document.getElementById("btn");
    var list = document.getElementById("list");
    var bottom_list = document.getElementById("bottom_list");

    list.classList.toggle("shown");
    bottom_list.classList.toggle("shown");

    if (list.classList.contains("shown")) {
        button.innerHTML = "close";
        button.style.color = "white";
        brand.style.color = "white";
    }
    else {
        button.innerHTML = "menu";
        button.style.color = "black";
        brand.style.color = "black";
    }
}