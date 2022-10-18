import background from '../IMG/ticToc.png'

function AlbumCard ({Title}, {gitLink}) {
    return(
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg" id="card1"
        style={{ backgroundImage: `url(${background})` }}
>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <a className="text-black text-shadow-1" href={gitLink}
            ><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold font-dark">
              {Title}
            </h2></a>
        </div>
      </div>
    </div>
    )
}

export default AlbumCard