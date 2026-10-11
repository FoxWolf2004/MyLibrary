const searchButton = document.querySelector(".searchButton");

const favPage = document.querySelector(".favPage");

const searchText = document.querySelector(".searchText");
const bookDisplay = document.querySelector(".bookDisplay");
const bookDisplayID = document.querySelector("#searchMain");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const curentPage = document.querySelector(".curentPage");
const back = document.querySelector(".back");

const welcome = document.querySelector(".welcome");
const notFind = document.querySelector(".notFind");

const notFindFav = document.querySelector(".notFindFav");

const pages = document.querySelector(".pages");
const loading = document.querySelector(".loading");
const error = document.querySelector(".error");
const errorText = document.querySelector(".errorText");

const favDisplay = document.querySelector(".favDisplay");
const favBookDisplay = document.querySelector(".favBookDisplay");
let bookState = [];
let favBooksState = [];

let pageState = 1;
let favPageState = 1;

let inFav = 0 

let searchState = "";
let limitPagesState = 0;
let limitPagesFav = 20;

searchButton.addEventListener("click", () => {
  console.log("Поиск книг по названию", searchText.value);

  searchState = searchText.value;
  pageState = 1;

  getBooks(searchState);

  searchText.value = "";
});

back.addEventListener("click", () => {
  favPageState = 1;
  inFav = 0
  favDisplay.setAttribute("style", "display: none;");

  bookDisplayID.setAttribute("style", "display: flex;");
  notFindFunc(false);
});

favPage.addEventListener("click", () => {
  favPageState = 1;
  inFav = 1
  getFav();

  bookDisplayID.setAttribute("style", "display: none;");
  favDisplay.setAttribute("style", "display: flex;");
});

prevButton.addEventListener("click", () => {
  if (pageState === 1) {
    console.log("you cannnot");
  } else {
    pageState = pageState - 1;
    getBooks(searchState);
  }
});

nextButton.addEventListener("click", () => {
  if (pageState === limitPagesState) {
    console.log("you cannnot");
  } else {
    pageState = pageState + 1;
    getBooks(searchState);
  }
});

const loadingFunc = (enabled) => {
  if (enabled === true) {
    loading.setAttribute("style", "display: flex;");
  } else {
    loading.setAttribute("style", "display: none;");
  }
};

const notFindFunc = (enabled,infav) => {
  if (enabled === true) {
    notFind.setAttribute("style", "display: flex;");
    notFindFav.setAttribute("style", "display: flex;");
  } else {
    notFind.setAttribute("style", "display: none;");
    notFindFav.setAttribute("style", "display: none;");
  }
};

const pagesFunc = (enabled) => {
  if (enabled === true) {
    pages.setAttribute("style", "display: flex;");
  } else {
    pages.setAttribute("style", "display: none;");
  }
};

const errorFunc = (enabled, text) => {
  if (enabled === true) {
    errorText.textContent = text;
    error.setAttribute("style", "display: flex;");
  } else {
    error.setAttribute("style", "display: none;");
  }
};

const welcomeFunc = (enabled) => {
  if (enabled === true) {
    welcome.setAttribute("style", "display: flex;");
  } else {
    welcome.setAttribute("style", "display: none;");
  }
};

async function getBooks(searchName) {
  const params = new URLSearchParams({
    q: `${searchName}`,
    limit: 20,
    page: pageState,
  });
  notFindFunc(false);
  welcomeFunc(false);
  pagesFunc(false);
  errorFunc(false, "");
  loadingFunc(true);

  try {
    bookDisplay.innerHTML = "";
    const response = await fetch(
      `https://openlibrary.org/search.json?${params}`,
    );

    if (!response.ok) {
      throw new Error(`http error${response.status}`);
    }

    const data = await response.json();
    bookState = data.docs;

    console.log("bookState:", bookState);
    console.log(data.docs);
    console.log(data.numFound);

    limitPagesState = Math.ceil(data.numFound / 20);

    if (limitPagesState > 1) {
      curentPage.textContent = `${pageState} of ${limitPagesState} pages`;

      pagesFunc(true);
    } else {
      console.log("pagenation not needed");
    }

    loadingFunc(false);
    display(bookState, bookDisplay);
  } catch (error) {
    loadingFunc(false);
    errorFunc(true, error);
  }
}
async function getFav() {
  favBookDisplay.innerHTML = "";
  try {
    const response = await localStorage.getItem("favBooks");
    if (response === "none" || !response) {
      localStorage.setItem("favBooks", "none");
      favBooksState = data;

      console.log("favBooksState:", favBooksState);
      display(favBooksState, favBookDisplay);
      console.log("res");
    } else {
      console.log(response);
      const data = await JSON.parse(response);
      console.log("res un");
      favBooksState = data;

      display(favBooksState, favBookDisplay);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}
getFav();
const display = (array, where) => {
  where.innerHTML = ""
  if (array.length <= 0) {
    console.log(array.length, "fedgvdsgf");
    console.log("you noy have a favorite books");
  } else {
    console.log(array.length);
    array.forEach((book) => {
      const fav = favBooksState.find((BookF) => {
        return BookF.key === book.key;
      });
      console.log(fav);

      const bookItem = document.createElement("article");
      bookItem.setAttribute("class", "bookItem");

      const favButton = document.createElement("button");
      const unfavButton = document.createElement("button");

      const favButtonImg = document.createElement("Img");
      const unfavButtonImg = document.createElement("Img");

      favButtonImg.setAttribute("class", "buttonHeart");
      unfavButtonImg.setAttribute("class", "buttonHeart");

      favButtonImg.setAttribute("src", "content/icons/fav.svg");
      unfavButtonImg.setAttribute("src", "content/icons/notFav.svg");

      favButton.append(unfavButtonImg);
      unfavButton.append(favButtonImg);

      favButton.setAttribute("class", "favButton");
      unfavButton.setAttribute("class", "unfavButton");

      if (fav) {
        favButton.setAttribute("style", "display: none;");
      } else {
        unfavButton.setAttribute("style", "display: none;");
      }

      const bookImage = document.createElement("img");
      if (!book.cover_i) {
        bookImage.setAttribute(
          "src",
          `https://dummyimage.com/290x450&text=${book.title}`,
        );
      } else {
        bookImage.setAttribute(
          "src",
          `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
        );
      }

      favButton.addEventListener("click", () => {
        addTofavorit(book);
        favButton.setAttribute("style", "display: none;");
        unfavButton.setAttribute("style", "display: block;");
      });

      unfavButton.addEventListener("click", () => {
        delFromFavorit(book);
        unfavButton.setAttribute("style", "display: none;");
        favButton.setAttribute("style", "display: block;");
      });

      const bookTitle = document.createElement("h2");
      bookTitle.textContent = book.title;

      bookItem.append(favButton, unfavButton, bookImage, bookTitle);

      where.append(bookItem);
    });
  }
};

const addTofavorit = (Book) => {
  const clone = favBooksState.find((BookF) => {
    return BookF.key === Book.key;
  });

  console.log(clone);
  if (clone) {
    console.log(
      `book ${Book.title} alredy added to favorite  it is ID:${Book.key}`,
    );
  } else {
    favBooksState.push(Book);
    console.log(`book ${Book.title} added to favorite  it is ID:${Book.key}`);
    localStorage.setItem("favBooks", JSON.stringify(favBooksState));
  }
};

const delFromFavorit = (Book) => {
  const indexFind = favBooksState.findIndex((book) => {
    return book.key === Book.key;
  });

  favBooksState.splice(indexFind,1)
  localStorage.setItem("favBooks", JSON.stringify(favBooksState));
  display(favBooksState, favBookDisplay);
  console.log(indexFind);
};
