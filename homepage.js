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


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 2000);
})