document.addEventListener("DOMContentLoaded", () => {
    var list = document.getElementById("shopping-list");

    document.getElementById("button-1").addEventListener("click", () => {
        var newElement = document.createElement("LI");
        list.appendChild(newElement).innerHTML = "chleb";
    });

    document.getElementById("button-2").addEventListener("click", () => {
        list.removeChild(list.children[list.children.length - 1]);
    });

    document.getElementById("button-3").addEventListener("click", () => {
        var clone = list.children[1].cloneNode(true);
        list.appendChild(clone);
    });
});