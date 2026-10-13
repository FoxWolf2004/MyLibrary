import { useState } from "react"

const HeaderBlock = ({searchClick}) => {
    const [serachText,setText] = useState('')

    return(
        <>
        <header>
        <div className="wrapper">
            <h1>MyLibrary</h1>
            <nav>
                <div className="navItem">
                    <h4 className="favPage">My Fav</h4>
                </div>

                <div className="search">
                    <input type="text" placeholder="book name here" className="searchText"  onChange={(event) => {setText(event.target.value)}}/>
                    <button className="searchButton" onClick={() => {searchClick(serachText)
                    }}>Search</button>
                </div>
            </nav>
        </div>
    </header>
    </>
    )
}


export default HeaderBlock