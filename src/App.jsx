import { useEffect, useState } from 'react'
import './App.css'
import HeaderBlock from './components/UI/header'
import BookContainer from './components/UI/bookContainer'
import Pagination from './components/UI/partsUi/pagination'

function App() {

  const [searchState,setsearch] = useState('')

  const [pageState,setpage] = useState(1)
  const [summPages,setSummPages] = useState(0)

  const [favPageState,setfavpage] = useState(0)

  const [bookState,setBooks] = useState([])
  const [favBookState,setFavBooks] = useState([])

LockManager;k
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

          const summ = (Math.ceil(dataJson.numFound / 20))
          console.log("summ ",summ)

          setSummPages(summ)


          setBooks(readyBooks)
          console.log('Книги из API:', readyBooks)

        } catch (error) {
          console.log(error)
        }
      }

      getBooks(searchState)

      
      console.log(searchState)
    },[searchState,pageState])
    

    

  return (
    <>
    <HeaderBlock chPage={() => setpage(1)} searchClick={setsearch} ></HeaderBlock>
    <main>
        <BookContainer data ={bookState}></BookContainer>
        {
          summPages > 1 &&(
          <Pagination pageStateNum={pageState} contPages={summPages} onCHN={() => {setpage(pageState + 1)}}  onCHP={() => {setpage(pageState - 1)}}></Pagination>
          )
        }




    </main>
    </>
  )
}

export default App
