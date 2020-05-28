// Lecture: Get And Manipulate On Individual Elements - Part 1

/*
console.log(document.getElementById('list'));

var el = document.getElementById('list');
console.log(el);
console.log(typeof el);

// var el = document.getElementById('LIST');
// console.log(el);

console.log(el.textContent);
console.log(el.textContent = 'Hello');

var heading = document.getElementById('heading').textContent;
console.log(heading);

var ulElement = document.getElementById('list');
console.log(ulElement.textContent = heading);

console.log(el.innerHTML);
console.log(el.innerHTML = 'Hello');
console.log(el.innerHTML = '<h1>Hello</h1>');
console.log(el.textContent = '<h1>Hello</h1>');
*/


var ul = document.querySelector('ul');

document.getElementById('add-btn').addEventListener('click',function(e){
    e.preventDefault();
    var addInput = document.getElementById('add-input');
    
    if(addInput.value !== ""){
        var li = document.createElement('li'),
        firstpar = document.createElement('p'),
        secondpar = document.createElement('p'),
        firstIcon = document.createElement('i'),
        secondIcon = document.createElement('i'),
        input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute('type','text');

        firstpar.textContent = addInput.value;
        secondpar.appendChild(firstIcon);
        secondpar.appendChild(secondIcon);

        li.appendChild(firstpar);
        li.appendChild(secondpar);
        li.appendChild(input);
        
        ul.appendChild(li);

        addInput.value = "";
    }

   
    

});
ul.addEventListener('click',function(e){
    if(e.target.classList[1] === "fa-pencil-square-o"){
        var parentPar = e.target.parentNode;
        parentPar.style.display = 'none';

        var note = parentPar.previousElementSibling;
        var input = parentPar.nextElementSibling;
        input.style.display = 'block';
        input.value = note.textContent;

        input.addEventListener('keypress',function(e){
            if(e.keyCode === 13){
                if(input.value !== ''){
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                }
                else{
                    var li = parentPar.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });

    }
    else if(e.target.className === "fa fa-times"){
        var li = e.target.parentNode.parentNode;
        ul.removeChild(li);
    }
});

var hideItem = document.getElementById('hide');
var label = document.querySelector('label');
hideItem.addEventListener('click',function(){   
    if(hideItem.checked){
        label.textContent = 'Unhide notes';
        ul.style.display = 'none';
    }
    else{
        label.textContent = 'Hide notes';
        ul.style.display = 'block';
    }
});


var searchInput = document.querySelector('#search-note input');
searchInput.addEventListener('keyup',function(e){
    var searchChar = e.target.value.toUpperCase();
    
    var notes = ul.getElementsByTagName('li');

    Array.from(notes).forEach(function(note){
        var parText = note.firstElementChild.textContent;
        
        if(parText.toUpperCase().indexOf(searchChar) !== -1){
            note.style.display = 'block';
        }
        else {
            note.style.display = 'none';
        }

    });
});


// The Project Ends here





