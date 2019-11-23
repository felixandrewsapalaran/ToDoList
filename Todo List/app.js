//put new constant at the top of the file to mirror where they appear in HTML
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
/*
Tip: you notice we're using two different selector methods above just for practice. But for real project keeping it simple is problably a good idea.

for example: if you decided to use querySelector it might make sense to use it as often as possible throught your code base.
*/


/*use textContent to return the text content of a node*/

//UPDATE constant name here
const descriptionInput = document.querySelector('input.description');//selecting input

//UPDATE constant name here
const descriptionP = document.querySelector('p.description');//since there's more than one paragraph in HTML we'll use class description to select just th one we wan

//updating const button to descriptionButton
const descriptionButton = document.querySelector('button.description');



//selecting the button and the input tag from HTML
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

//selecting remove item button
const removeItemButton = document.querySelector('button.removeItemButton');

//adding a click event listener to the button
toggleList.addEventListener('click', () => {
                            
//perfect time to use conditional statement
   if(listDiv.style.display == 'none') {
      toggleList.textContent = 'Hide list';
      listDiv.style.display = 'block';
  }else{
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});



//call addEventListener on button to listen for click

descriptionButton.addEventListener('click', () =>{
 //when the button is click we'll use the value of the text input to set the paragraph's textContent property
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});


//now let's add a click event listener for addItemButton
addItemButton.addEventListener('click', () =>{
                               
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');     
  li.textContent = addItemInput.value;
  ul.appendChild(li);

  addItemInput.value = '';
});



//click event handler for remove last item button
removeItemButton.addEventListener('click', () =>{
                               
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');     
  ul.removeChild(li);
});



