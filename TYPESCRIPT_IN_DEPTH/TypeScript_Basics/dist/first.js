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
        if (book === void 0) { book = this.getAllBook(); }
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
        if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
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
    LibraryManager.prototype.PublicationMessage = function (year) {
        return "date published " + year;
    };
    LibraryManager.prototype.getBooksById = function (id) {
        var allBooks = this.getAllBook();
        return allBooks.filter(function (book) { return book.id === id; })[0];
    };
    LibraryManager.prototype.createCustomerId = function (name, id) {
        return name + id;
    };
    LibraryManager.prototype.createCustomer = function (name, age, city) {
        console.log('Creating customer' + name);
        if (age) {
            console.log("Age " + age);
        }
        if (city) {
            console.log("City" + city);
        }
    };
    LibraryManager.prototype.Checkoutbooks = function (customer) {
        var bookIDS = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            bookIDS[_i - 1] = arguments[_i];
        }
        console.log("checking out books for " + customer);
        var booksCheckout = [];
        for (var _a = 0, bookIDS_1 = bookIDS; _a < bookIDS_1.length; _a++) {
            var id = bookIDS_1[_a];
            var book = this.getBooksById(id);
            if (book.avilable) {
                booksCheckout.push(book.title);
            }
        }
        return booksCheckout;
    };
    LibraryManager.prototype.getTitles = function (bookProperty) {
        var allbooks = this.getAllBook();
        var title = [];
        if (typeof bookProperty == 'string') {
            for (var _i = 0, allbooks_1 = allbooks; _i < allbooks_1.length; _i++) {
                var book = allbooks_1[_i];
                if (book.author === bookProperty) {
                    title.push(book.title);
                }
            }
        }
        else if (typeof bookProperty == 'boolean') {
            for (var _a = 0, allbooks_2 = allbooks; _a < allbooks_2.length; _a++) {
                var book = allbooks_2[_a];
                if (book.avilable == bookProperty) {
                    title.push(book.title);
                }
            }
        }
        return title;
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