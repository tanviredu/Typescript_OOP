var Category;
(function (Category) {
    Category[Category["BioGraphy"] = 0] = "BioGraphy";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
var LibraryManager = (function () {
    function LibraryManager() {
    }
    LibraryManager.prototype.getAllBook = function () {
        this.books = [
            { id: 1, title: "annodin", author: "humayon ahmead", avilable: true, category: Category.Fiction },
            { id: 2, title: "A Frawell", author: "Ernest", avilable: false, category: Category.Fiction },
            { id: 3, title: "I know the Cage bird sings", author: "Maya", avilable: true, category: Category.Poetry },
            { id: 4, title: "its 3 pm lets kill some people", author: "Aaaron", avilable: true, category: Category.History },
        ];
        return this.books;
    };
    LibraryManager.prototype.LogFirstAvilable = function (book) {
        this.numberofBooks = book.length;
        this.firstAvilable = "";
        for (var _i = 0, book_1 = book; _i < book_1.length; _i++) {
            var currentbook = book_1[_i];
            if (currentbook.avilable) {
                this.firstAvilable = currentbook.title;
                break;
            }
        }
        console.log(this.firstAvilable);
    };
    LibraryManager.prototype.getBookCategoryByTitle = function (categoryFilter) {
        console.log("Getting Books in Category " + Category[categoryFilter]);
        var allBooks = this.getAllBook();
        var filteredTitles = [];
        for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
            var currentbook = allBooks_1[_i];
            if (currentbook.category === categoryFilter) {
                filteredTitles.push(currentbook.title);
            }
        }
        return filteredTitles;
    };
    LibraryManager.prototype.LogBookTitles = function (titles) {
        for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
            var title = titles_1[_i];
            console.log(title);
        }
    };
    LibraryManager.prototype.getBooksById = function (id) {
        var allBooks = this.getAllBook();
        return allBooks.filter(function (book) { return book.id === id; })[0];
    };
    return LibraryManager;
}());
var lb = new LibraryManager();
var books = lb.getAllBook();
lb.LogFirstAvilable(books);
var num = Category.Fiction;
var alltitle = lb.getBookCategoryByTitle(num);
console.log(alltitle);
lb.LogBookTitles(alltitle);
console.log(lb.getBooksById(1));
//# sourceMappingURL=first.js.map