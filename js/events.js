// option 1: directly set on the HTML element
// <button onclick="console.log(65)">Another Button</button>



console.log("This is separate js File");

// option 2: add onclick function on the HTML element
// important : we will use this
// <button onclick="makeRed()">Make Red</button>
function makeRed(){
    docoment.body.style.backgroundColor = 'red';
}

// option 3: 
const makeBlueButton = docoment.getElementById("make-blue");
       makeBlueButton.onclick = makeBlue;

       function makeBlue(){
        docoment.body.style.backgroundColor = 'blue';
       }


// option: 3. another 
const PurpleButton = document.getElementById("make-purple");
       PurpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple';
       }


// option: 4
const pinkButton = document.getElementById('make-pink');
       pinkButton.addEventListener('click', makePink);

       function makePink(){
        document.body.style.backgroundColor = 'pink';
       }

       
// option: 4 another
const makeGreenButton = document.getElementById('make-green');
       makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
       });

// option : 4 Final
// Important : we will use this sometimes
 // document.getElementById('make-orange').addEventListener('click', function(){})
 document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})