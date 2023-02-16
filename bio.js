const showMain = () => {
    document.getElementById("loader").style.display = "none";
    document.querySelector("main").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(showMain, 750);
})