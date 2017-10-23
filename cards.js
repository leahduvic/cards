// instructions: 
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

const idGenerator = function* () {
    let uniqueId = 1

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}
let gen = idGenerator()

// add event to create button first
let btn = document.getElementById("button")
btn.addEventListener("click",function (mouseEvent) {
    let inputFields = document.getElementById("info")
    cardFactory(inputFields)
        console.log(inputFields.firstname.value)
        console.log("mouseEvent", mouseEvent);
});

// add event input fields
let output = document.getElementById("card-place")

//function to grab input
//then put them into a card element 
// that will print to the page
function cardFactory (userInput) {
    console.log(userInput.firstname.value)
    let currentId = gen.next().value
    output.innerHTML += `
    <div id="card_${currentId}" class="card">
    <p>${userInput.firstname.value}</p>
    <p>${userInput.lastname.value}</p>
    <p>${userInput.bio.value}</p>
    <button id="button_${currentId}">Delete Post</button>
    </div>
    `
}

output.addEventListener("click", function(event){
    if (event.target.id.startsWith("button_")) {
        const iD = event.target.id.split("_")[1]
        const cardEl = document.getElementById("card_" + iD) 
        output.removeChild(cardEl)
    }
    })

    

        


// instructions part 2:
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.