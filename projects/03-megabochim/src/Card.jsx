import PropTypes from 'prop-types'

export const Card = ({imgSrc, title, desc}) => {
    return (
        <div className="card">
            <img src={imgSrc} alt="Card image" />
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}
Card.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
}

Card.defaultProps = {
    imgSrc: "https://via.placeholder.com/150",
    title: "No title",
    desc: "(empty)"
}