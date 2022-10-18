function Button ({text, clickHandle}) {
    return(
        <button className="btn-primary" onClick={clickHandle}>{text}</button>
    )
}

export default Button