
import style from "./bookItem.module.css"

const BookItem = ({title,cover}) => {

    let coverLink 

    if(!cover ===''){
        coverLink =`https://covers.openlibrary.org/b/id/${cover}-M.jpg`
    }else{
        coverLink = `https://dummyimage.com/290x450&text=${title}`
    }

    return(
        <article className={style.bookItem}>
            <img src={coverLink} alt="" />
            <h2>{title}</h2>
        </article>
    )
}

export default BookItem