export default function Card(props){

    const attore = props.attore

    return(
        <>
        <div className="col-sm-12 col-md-6 col-xl-4 mb-3">
            <div className="card h-100">
                <img className="card-img-top" src={attore.image} alt="Card image cap"/>
                <div className="card-body">
                    <h3 className="card-title">{attore.name}</h3>
                    <p className="card-text">{attore.biography}</p>
                    <p className="card-text">Anno di nascita: {attore.birth_year}</p>
                    <p className="card-text">Nazionalitá: {attore.nationality}</p>
                    <h3 className="card-title">Riconoscimenti</h3>
                    <ul className="list-group list-group-flush">
                        {attore.awards.map((award, index) => (
                            <li key={index} className="list-group-item">{award}</li>
                        ))}
                    </ul>
                </div>
            </div>            
        </div>

        </>
    )
}