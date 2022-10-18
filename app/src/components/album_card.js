function AlbumCard ({Title}, {gitLink}) {
    return(
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        // style='background-image: url{imgUrl}'
>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <a className="text-white text-shadow-1" href={gitLink}
            ><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold font-white">
              {Title}
            </h2></a>
        </div>
      </div>
    </div>
    )
}

export default AlbumCard