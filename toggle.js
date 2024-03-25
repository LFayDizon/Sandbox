const heading = document.getElementById("myHeading");
const toggleColourButton = document.getElementById("toggleColourButton");
const toggleFontClicked = document.getElementById("toggleFontButton")

toggleColourButton.addEventListener("click", toggleColourClicked);

function toggleColourClicked(){
    let buttonText = toggleColourButton.textContent;

     if (buttonText === "Red"){
        heading.classList.remove("red");
        heading.classList.add("green");
        toggleColourButton.textContent = "Green";
     }

     else if (buttonText === "Green"){
        heading.classList.remove("green");
        heading.classList.add("blue");
        toggleColourButton.textContent = "Blue";
     }

     if (buttonText === "Blue"){
        heading.classList.remove("blue");
        heading.classList.add("red");
        toggleColourButton.textContent = "Red";
     }
}

toggleFontClicked.addEventListener("click", toggleFontClicked)

function toggleFontClicked() {
    let buttonText = toggleFontClicked.textContent;

    if (buttonText === "Papyrus"){
        heading.classList.remove("papyrus");
        heading.classList.add("lucida_handwriting");
        toggleFontClicked.textContent = "Lucida Handwriting";
     }

     else if (buttonText === "Lucida Handwriting"){
        heading.classList.remove("lucida_handwriting");
        heading.classList.add("lucida_console");
        toggleFontClicked.textContent = "Lucida Console";
     }

     if (buttonText === "Lucida Console"){
        heading.classList.remove("lucida_console");
        heading.classList.add("Papyrus");
        toggleFontClicked.textContent = "papyrus";
     }
}

