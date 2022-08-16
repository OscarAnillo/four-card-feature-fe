export default function CardComponent({ cardTitle, cardParagraph, cardImg, className }){
    return (
        <div className={`${className} card`}>
            <div className="card-container">
                <h3>{cardTitle}</h3>
                <p>{cardParagraph}</p>
                <img src={cardImg} alt='' />
            </div>
        </div>
    )
}