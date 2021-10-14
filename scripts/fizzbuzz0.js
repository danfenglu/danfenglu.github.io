
function getData() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
  if (middleInitial) {
     document.getElementById("greeting").textContent = "Welcome to Language Learning Club, " + firstName + " " + middleInitial + ". " + lastName + "!";
   } else {
     document.getElementById("greeting").textContent = "Welcome to Language Learning Club, " + firstName + " " + lastName + "!";
   }
  
  let howHigh = prompt(`How high do you want to count, ${firstName}?`);
  lesson(howHigh);
}

function lesson(counter) {
  for(let i = 0; i <= counter; i++) {
    var evenOrOdd;
    
    if (i % 2 === 0) {
      evenOrOdd = 'the number is even';
    } else {
      evenOrOdd = 'the number is odd';
    }
    
    //creates new element & stores in variable
    var newListItem = document.createElement('li');
    
    //creates text node & stores in variable
    var newText = document.createTextNode(i + '- learning club - ' + evenOrOdd);
    
    //attaches text node to new element
    newListItem.appendChild(newText);
    
    //find position where element should be added
    var position = document.getElementsByTagName('ul')[0];
    
    //insert new element in correct position
    position.appendChild(newListItem);
    
  }
  
}