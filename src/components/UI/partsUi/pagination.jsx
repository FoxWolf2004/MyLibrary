const Pagination = ({pageStateNum,contPages,onCHP,onCHN}) => {
        return(
            <section className="pages">
                <button className="prev" onClick={onCHP}>prev</button>
                <p className="curentPage">{`${pageStateNum} of ${contPages} pages`}</p>
                <button className="next" onClick={onCHN}> next </button>
            </section >
        )        
}

export default Pagination