export const Card = ({imgSrc, title, desc}) => {
    return (
        <div className="card">
            <img src={imgSrc} alt="Card image" />
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}