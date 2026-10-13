import { useEffect, useState } from 'react'
import './App.css'
import HeaderBlock from './components/UI/header'
import BookContainer from './components/UI/bookContainer'

function App() {

  const [searchState,setsearch] = useState('')

  const [pageState,setpage] = useState(1)
  const [favPageState,setfavpage] = useState(0)

  const [bookState,setBooks] = useState([])
  const [favBookState,setFavBooks] = useState([])


    useEffect(()=> {



      async function getBooks(searchText) {

        const params = new URLSearchParams({
            q: `${searchText}`,
            limit: 20,
            page: pageState,
          });

        try {
          const rawData = await fetch(`https://openlibrary.org/search.json?${params}`)

          if (!rawData.ok) {
            throw new Error(`http error ${rawData.status}`)
          }
          const dataJson = await rawData.json()
          console.log(dataJson)
          const readyBooks = dataJson.docs

          // limitPagesState = Math.ceil(data.numFound / 20);

          // if (limitPagesState > 1) {
          //   curentPage.textContent = `${pageState} of ${limitPagesState} pages`;

          setBooks(readyBooks)
          console.log('Книги из API:', readyBooks)

        } catch (error) {
          console.log(error)
        }
      }

      getBooks(searchState)

      
      console.log(searchState)
    },[searchState])
    

    

  return (
    <>
    <HeaderBlock searchClick={setsearch}></HeaderBlock>
    <main>
        <BookContainer data ={bookState}></BookContainer>
    </main>
    </>
  )
}

export default App
