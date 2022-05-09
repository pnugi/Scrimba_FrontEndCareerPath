const userInputField = document.getElementById("searchInput");

/* Getting value from inputfield after user "lets go of some typed key" */
userInputField.addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase();
    /* Getting DOM elements by class */
    let allNamesDOMCollection = document.getElementsByClassName("name");

    /* Looping all html elements */
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentName);

        /* IF username includes letter or text typed in inputfield AND there is matching result, show them */
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block"
        } else {
            allNamesDOMCollection[counter].style.display = "none"
        }
    }
});