const WindowInfo = (headText,text,greyText,img,enabled) => {
    if(enabled === true){
        return(
        <>
            <section className="WindowInfo">
                <img src={img} alt=""/>
                <h1>{headText}</h1>
                <p>{text}</p>
                <p style="color: rgba(0, 0, 0, 0.541);">{greyText}</p>
            </section>
           </>
    )
    }else{
        <>
        </>
    }

}


export default WindowInfo


