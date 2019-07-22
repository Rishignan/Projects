// Book class : Represents a Book

class Book{
	constructor(title,author,isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		
	}
}

// UI Class: Handle UI Tasks

class UI {
	
	static displayBooks(){
		const StoredBooks = Store.getBooks();		
		
		
		const books = StoredBooks;
		
		books.forEach((book) => UI.addEachBookToList(book));
		
		
		
	}
	
	
	static addEachBookToList(book)
	{
		const list = document.querySelector('#book-list');
		
		const row = document.createElement('tr');
		
		row.innerHTML = `
		
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="btn btn-danger btn-sm delete"> X</a></td>
	
		`;
		
		
		list.appendChild(row);
	}
	
	static showAlert(message, className){
			const div = document.createElement('div');
			div.className = `alert alert-${className}`;
			div.appendChild(document.createTextNode(message));
		
		// insert before container in html code
			const container = document.querySelector('.container');
			const form = document.querySelector('#book-form');
			container.insertBefore(div,form);
		
		// vanis in 3 seconds
		
			setTimeout(() => document.querySelector('.alert').remove(),3000);
		
	}
	
	static clearBookFields(){
			
			document.querySelector('#title').value = '';
			document.querySelector('#author').value = '';
			document.querySelector('#isbn').value = '';
		}
	
	static deleteBook(el){
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
	}
}








// Store Class: Handle Storage
class Store {
	
	static getBooks(){
		let books;
		
		if(localStorage.getItem('books') === null){
			books = [];
			
		}else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		
		return books;
		
		
	}
	
	static addBook(book){
		
		const books = Store.getBooks();
		
		books.push(book);
		
		localStorage.setItem('books',JSON.parse(books));
		
	}
	
	static removeBook(isbn){
		const books = Store.getBooks();
		
		books.forEach((book, index) => {
			
			
			if(books.isbn === isbn){
			   books.splice(index,1);
				
			   }
		});
	}
}











//Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a Books

document.querySelector('#book-form').addEventListener('submit',(e) => {
	
	e.preventDefault();
	
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;
	
	
	
	//validate
	
	if(title === '' || author === '' || isbn === ''){
		
		UI.showAlert('Please fill in all fields','danger');
		
	} else {
		
				// Instantiate book to UI
			const book = new Book(title,author,isbn);

				//Add book to UI 
			UI.addEachBookToList(book);
		
		
		
		//show success message
		UI.showAlert('Book Added', 'success');


			//clear fields

			UI.clearBookFields();
	
	}
	
	
	
	
	
	
	
	
	
	
});


//Event: Remove a Book


document.querySelector('#book-list').addEventListener('click', (e) => {
	
	UI.deleteBook(e.target);
	
	//show success message
		UI.showAlert('Book Removed', 'success');
	
});







