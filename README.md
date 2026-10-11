# 📚 MyLibrary

A simple book search application built with Vanilla JavaScript and the Open Library API.

MyLibrary allows users to search for books, browse search results, navigate through pages, and save their favorite books locally.

## ✨ Features

- 🔎 **Book Search** — search for books by title or keywords.
- 📖 **Book Cards** — view book covers and titles.
- ❤️ **Favorites** — add books to or remove books from your favorites.
- 💾 **Local Storage** — save favorite books in the browser so they remain available after reloading the page.
- 📄 **Pagination** — navigate through search results.
- ⏳ **Loading State** — display a loading indicator while fetching data.
- ⚠️ **Error Handling** — handle failed requests and display error messages.
- 📱 **CSS Grid Layout** — display books in a grid of cards.

## 🛠️ Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Fetch API
- Open Library API
- Local Storage

## 🌐 API

This project uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search) to retrieve book information.

Book covers are provided by the [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers).

## 🚀 Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FoxWolf2004/MyLibrary.git
   ```

2. Open the project folder.

3. Open `index.html` in your browser, or use the **Live Server** extension in Visual Studio Code.

No package installation or API key is required.

## 📂 Project Structure

```text
MyLibrary/
├── index.html
├── styles/
│   └── styles.css
├── scripts/
│   └── core.js
└── content/
    └── icons/
```

## 🧠 What I Learned

- Working with external APIs using `fetch()` and `async/await`.
- Handling HTTP errors and asynchronous requests.
- Working with arrays and methods such as `find()` and `findIndex()`.
- Saving and restoring data using `localStorage`.
- Dynamically creating and updating DOM elements.
- Implementing pagination.
- Managing application state with JavaScript variables.

## 🔮 Future Improvements

- [ ] Improve responsive design for mobile devices.
- [ ] Add a detailed book information modal.
- [ ] Improve empty-state and error handling.
- [ ] Refactor the code into ES modules.
- [ ] Improve favorites management and application state handling.

## 📄 License

This project was created for educational purposes.
