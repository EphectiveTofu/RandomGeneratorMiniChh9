
let selectedName = "";
let textChange = document.getElementById("textChange");


//This will generate the random name
let nameChange = document.getElementById("nameChange").addEventListener("click", randomNameGenerator);

//This will draw a random name and add it to the new last

//This is the class name generator
let classNames = ["Adrian Segura", "Arthur Olmos", "Alex Ato", "Ann Chansey", "Bryan Stewart", "Carlos Gonzalez",
    "Christy Eang", "Demitrius Ovro", "Dylan McFarlin", "Hugo Mejia", "John Shamoon",
    "Jorge Lopez", "Joseph Racca", "Juan Morales", "Ken Martinez", "Leopoldo Manzo", "Matthew Mendoza",
    "Matthew Tyler Rose", "Sean Chandler", "Trevor Womack", "Victor Maldonado",
];

//This function generates the random name 
function randomNameGenerator() {
    selectedName = classNames[Math.floor(Math.random() * classNames.length)];
    let liElement = document.createElement("li");
    outputText.appendChild(liElement);
    //alert(selectedName);
    textChange.innerText = selectedName;
    liElement.innerText = (selectedName);
    
}


inputText.addEventListener("keypress", function(e){
    //console.log(e);
    if(e.code == "Enter")
    {
        appendElements(inputText.value);
    }
});

function appendElements(classNames)
{
    console.log(classNames);
    //let ulElement = document.createElement("ul");
    let liElement = document.createElement("li");

    liElement.innerText = classNames;
    //outputText.setAttribute("class", " d-flex  justify-content-center");
    liElement.addEventListener("click", function(e){
        e.target.remove();
    });

    //ulElement.appendChild(liElement);
    outputText.appendChild(liElement);
    inputText.value = "";

}

function appendElements2(classNames){
 classNames.push(inputText.value);
 inputText.value ="";
}