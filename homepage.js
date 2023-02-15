const homepageName = document.getElementById("homepageText")
const txt = "I'm Johnny Chen"
let i = 0

const typeWriter = () => {
    if(i < txt.length) {
        homepageName.innerHTML += txt.charAt(i);
        i += 1
        setTimeout(typeWriter, 100)
    }
}

const showMain = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainEl").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(showMain, 2000);
    setTimeout(typeWriter, 2000);
})