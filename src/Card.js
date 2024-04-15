import PropTypes from "prop-types";

function Card({ img, name, job }) {
    return (
        <div className="col">
            <div className="card rounded-0 px-0"  >
                <img src={img} className="card-img-top rounded-0 object-fit-cover" style={{height:'250px', objectPosition:'top'}} alt={name} />
                <div className="card-body text-center">
                    <h5 className="card-title text-uppercase">{name}</h5>
                    <p className="card-text text-capitalize">{job}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired
}

Card.defaultProps = {
    img: "https://placehold.co/600x400"
}

export default Card;