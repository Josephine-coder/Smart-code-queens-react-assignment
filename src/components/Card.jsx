 import data from "../data";

function Card(props) {
  return (
    <>
        <div className="card">
            <div className="container">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </>
  )
}

export default Card
