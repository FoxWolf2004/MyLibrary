const Pagination = (contPages,pageState) => {
    return(
        <section className="pages">
            <button className="prev"><</button>
            <p className="curentPage">{`${pageState} of ${contPages} pages`}</p>
            <button className="next"> > </button>
        </section >
    )
}

export default Pagination