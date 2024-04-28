let library =[];

function Book (title,author,pages,read){
this.title = title,
this.author = author,
this.pages = pages,
this.read =read
};

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  document.querySelector('.container').style.display ='block';
})
let cancel = document.querySelector('.cancel').addEventListener('click',()=> {
    document.querySelector('.container').style.display ='none';
});

let formSubmit = document.querySelector('.submit');
formSubmit.addEventListener('click',addBookToLibrary);
function addBookToLibrary(){
let title = document.querySelector('.input-title').value;
let author = document.querySelector('.input-author').value;
let pages  = document.querySelector('.input-pages').value;
let read = document.querySelector('.input-read').value;
console.log("title  " + title,'Author ' + author, 'Pages ' + pages,'read ' + read);
let book = new Book(title,author,pages,read)
console.log(book);
library.push(book);
console.log(library);
createCard(library)
}

function createCard(library){
  for (let i = 0; i < library.length; i++) {
    console.log(library[i]);  
  }
}


