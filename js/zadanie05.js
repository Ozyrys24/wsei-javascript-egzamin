let buttons = document.getElementsByTagName("BUTTON");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById("container").innerHTML = button.getAttribute("data-text");
    });
});
