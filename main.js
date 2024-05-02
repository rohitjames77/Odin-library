// Global Values....................................................

let library =[];

// Book Object Constructor..............................................
function Book (title,author,pages){
this.title = title,
this.author = author,
this.pages = pages
};
//Add Book Button Function ....................................
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  document.querySelector('.formContainer').style.display ='block';
})
// Form Cancel Button Function..................................................
let cancel = document.querySelector('.cancel').addEventListener('click',()=> {
  document.querySelector('.formContainer').style.display ='none';
});
// Form Submit Button Function ..................................................... 
let formSubmit = document.querySelector('.submit');
formSubmit.addEventListener('click',addBookToLibrary);
function addBookToLibrary(){    //On event click this function takes values form input tags and store it in book Object and push that object into library array. 
let input = document.querySelector('.input');
  if(input.value.length != 0){
let title = document.querySelector('.input-title').value;
let author = document.querySelector('.input-author').value;
let pages  = document.querySelector('.input-pages').value;
console.log("title  " + title,'Author ' + author, 'Pages ' + pages);
let book = new Book(title,author,pages)
console.log(book);
library.push(book);
document.querySelector('.formContainer').style.display ='none';
}

}

function extractObjValue(){   // returns  all last pushed object values ........... 
  let latestObj = library[library.length-1];
  let value = Object.values(latestObj).join('');
  console.log(value);
  
  return value;
  }

formSubmit.addEventListener('click',createCard);
function createCard(){ //It create empty bookCard and buttons inside book container and append object Value from latest input.
  let bookDiv = document.createElement('div');   
  bookDiv.className = 'bookCard';
  document.querySelector('.bookContainer').appendChild(bookDiv);  
  let objValue=extractObjValue();
   bookDiv.textContent = objValue;
   let readBtn = document.getElementById('readBtn');
   readBtn.style.display = 'block';
  let deleteBtn = document.getElementById('deleteBtn');
  deleteBtn.style.display = 'block';

  }

  let click =0;
  let readStatus = document.getElementById('readBtn');
readStatus.addEventListener('click',()=>{
  readStatus.textContent = 'UnRead';
    click++;
    console.log(click);
    if (click % 2 === 0){
      readStatus.textContent = 'Read';
    } 
  })


  let deleteStatus = document.getElementById('deleteBtn');
  deleteStatus.addEventListener('click',()=> {
    let book = document.querySelector('.bookCard');
    let btn1 = document.getElementById('readBtn');
    let btn2 = document.getElementById('deleteBtn');  
        book.parentNode.removeChild(book);
        btn1.parentNode.removeChild(btn1);
        btn2.parentNode.removeChild(btn2);
        
  })




