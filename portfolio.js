const searchBar = document.getElementById("search_bar")
const projects = document.querySelectorAll(".projects > li")

searchBar.addEventListener("keyup", (e) => {
    const typed = e.target.value.toLowerCase()
    
    const arrayOfFiltered = filterByTyped(typed, projects)

    hideElements(arrayOfFiltered, projects)

})


// filters projects array by what is typed in searchbar
const filterByTyped = (typed, projects) => {
    const arrayOfProjects = []

    for(let element of projects){
        if(element.classList.value.startsWith(typed) || element.children[0].children[1].innerHTML.trim().toLowerCase().startsWith(typed)) arrayOfProjects.push(element)        
    }

    return arrayOfProjects
}

// iterates through the list of elements and elements that are not in the "arr" are turned to display none;
const hideElements = (arr, projects) => {
    for(let element of projects){
        // always sets all elements to show == resetting all elements.
        element.style.display = "list-item"

        if(!arr.includes(element)){
            element.style.display = "none"
        }
    }
}