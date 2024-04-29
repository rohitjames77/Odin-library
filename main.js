let library =[];

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
function addBookToLibrary(){
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

formSubmit.addEventListener('click',createCard);
function createCard(){
  let bookDiv = document.createElement('div');   
  bookDiv.className = 'bookCard';
  document.querySelector('.bookContainer').appendChild(bookDiv);  
  }

  formSubmit.addEventListener('click',appendTextValue);
function  appendTextValue (){
library.forEach(obj => {
  let value = Object.values(obj);
  console.log(` Value ${value}`);
  let bookDiv = document.querySelector('.bookCard');
  bookDiv.textContent = value; 
});

}


