const searchButton = document.querySelector(".searchButton")
const searchText = document.querySelector(".searchText")
const bookDisplay = document.querySelector(".bookDisplay")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")
const curentPage = document.querySelector(".curentPage")

const welcome = document.querySelector(".welcome")
const loading = document.querySelector(".loading")
const error = document.querySelector(".error")
const errorText = document.querySelector(".errorText")

let bookState = []
let pageState = 1
let searchState = ""
let limitPagesState = 0
searchButton.addEventListener("click", () => {
    console.log("Поиск книг по названию",searchText.value)

    searchState = searchText.value
    pageState = 1

    getBooks(searchState)

    searchText.value = ''
})


prevButton.addEventListener("click",() => {
    if (pageState === 1) {
        console.log("you cannnot")
    }else{
        pageState = pageState - 1
        getBooks(searchState)
    }
})

nextButton.addEventListener("click",() => {
    if (pageState === limitPagesState) {
        console.log("you cannnot")
    }else{
        pageState = pageState + 1
        getBooks(searchState)
    }
})

const loadingFunc = (enabled) => {
    if (enabled === true) {
       
        loading.setAttribute("style","display: flex;")  
    } else {
        loading.setAttribute("style","display: none;")  
    }
}


const errorFunc = (enabled,text) => {
    if (enabled === true) {
         errorText.textContent = text
        error.setAttribute("style","display: flex;")  
    } else {
        error.setAttribute("style","display: none;")  
    }
}


const welcomeFunc = (enabled) => {
    if (enabled === true) {
        welcome.setAttribute("style","display: flex;")  
    } else {
        welcome.setAttribute("style","display: none;")  
    }
}



async function getBooks(searchName) {
    const params = new URLSearchParams({
        q: `${searchName}`,
        limit: 20,
        page: pageState
    })

    welcomeFunc(false)
    errorFunc(false,'')
    loadingFunc(true)

    try {
        bookDisplay.innerHTML = ""
        const response = await fetch(`https://openlibrary.org/search.json?${params}`)

        if (!response.ok) {
            throw new Error(`http error${response.status}`)
        }

        const data = await response.json()
        bookState =  data.docs

        console.log("bookState:",bookState)
        console.log(data.docs)
        console.log(data.numFound)
        limitPagesState = Math.ceil(data.numFound / 20)
        curentPage.textContent = `${pageState} of ${limitPagesState}pages`
        loadingFunc(false)
        display(bookState)
    } catch (error) {
        loadingFunc(false)
        errorFunc(true,error)
    }
}

const display = (array) => {
    array.forEach(book => {
        const bookItem = document.createElement("article")
        bookItem.setAttribute("class","bookItem")
        const bookImage = document.createElement("img")
        bookImage.setAttribute("src",`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`)

        const bookTitle = document.createElement("h2")
        bookTitle.textContent = book.title

        bookItem.append(
            bookImage,
            bookTitle
        )

        bookDisplay.append(bookItem)
    });
}





