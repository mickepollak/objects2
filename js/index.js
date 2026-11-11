const library = [
    {
        title: "Harry P",
        author: "J.K. Rowling",
        isRead: false,
    },
    {
        title: "Pippi Långstrump",
        author: "Astrid Lindgren",
        isRead: true,
    },
    {
        title: "Percy Jackson",
        author: "Rick Riordan",
        isRead: true,
    },
    {
        title: "GPL License",
        author: "Richard Stallman",
        isRead: true,
    }
];



function addBook() {
    const title = prompt("enter a book title:");
    if (title === null) {
        return; 
    }

    const author = prompt("enter the authors name:");
    if (author === null) {
        return;
    }

    if (title === "" || author === "") {
        alert("haha, you need both title and author. try again.");
        return;
    }

    const isRead = confirm("have you really read this book?");

    library.push({
        title: title,
        author: author,
        isRead: isRead,
    });

    alert('"' + title + '" was added.');
}


function listBooks() {
    if (library.length === 0) {
        alert("you aint got books babe!");
        return;
    }

    console.log("your bnooks:");
    library.forEach(function (book, index) {
        const status = book.isRead ? "read" : "unread";
        console.log(
            index + 1 + ". " + book.title + " by " + book.author + " (" + status + ")"
        );
    });

    alert("here's your books!");
}



function markAsRead(title) {
    const book = library.find(function (item) {
        return item.title.toLowerCase() === title.toLowerCase();
    });
        book.isRead = true;
        alert('"' + book.title + '" is now marked as read.');

}

let runningMenu = true;

while (runningMenu) {
    const choice = prompt(
        "Book Tracker\n" +
            "1. Add Book\n" +
            "2. List Books\n" +
            "3. Mark Book as Read\n" +
            "4. Exit\n\n" +
            "Enter your choice:"
    );

    if (choice === null) {
        runningMenu = false;
        break;
    }

    switch (choice) {
        case "1":
            addBook();
            break;

        case "2":
            listBooks();
            break;

        case "3": {
            const title = prompt("what book to mark as read?:");
            if (title !== null) {
                markAsRead(title);
            }
            break;
        }

        case "4":
            runningMenu = false;
            alert("thank you and have a great day!");
            break;

        default:
            alert("invalid choice.");
    }
}
