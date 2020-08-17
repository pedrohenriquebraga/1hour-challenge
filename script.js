let Books = document.querySelector("#books")

function searchBooks() {
    let searchBook = document.querySelector("input").value || "Aventura"
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=AIzaSyBCNcR8h0SZekHYyyoyY83EddHJtyCzPx8`).then((books, err) => {
        if (err) {
            return console.log(err)
        } else {
            Books.innerHTML = ""
            for (books of books.data.items) {
                let book = books.volumeInfo
                Books.innerHTML += `<div class="book">
                    <img class="image" src="${book.imageLinks.smallThumbnail}" alt="">
                    <h3 class="title">${book.title}</h3>
                    <p class="desc">${book.description || "[Sem Descrição]"}</p>
                    <a href="${book.infoLink}">Ver Mais</a>
                </div>`
            }
        }
    })
}
