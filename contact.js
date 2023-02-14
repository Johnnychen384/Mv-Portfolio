const names = document.getElementById("names");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");


sendBtn.addEventListener("click", (e) => {

    // array of all input fields
    const arr = [names, email, subject, message];

    // condition for the successful alert to be sent
    let filledOut = true;

    // iterates through the arr array and checks if any of the input fields are empty
    for(let element of arr){

        // removes the red border related class at the beginning of each interation
        element.classList.remove("incomplete");

        // sets span element to display none after every iteration.
        element.nextElementSibling.style.display = "none";


        if(element.value === '') {
            // prevents reset to keep input fields current filled out data
            e.preventDefault();

            // if an input field is empty alert the user.
            alert(`Please fill out ${element.name}.`);

            // condition set to false to prevent successful alert from going out.
            filledOut = false;
            
            // adds the red border class to the element that is still empty.
            element.classList.add("incomplete");

            // sets the span element to display block which shows the span elements content.
            element.nextElementSibling.style.display = "block";
        }
    }
    
    // if filledOut condition is true send out successful message alert and reset page which empties fields.
    if(filledOut){
        alert("Message Successfully Sent.")
        return
    }
    
})