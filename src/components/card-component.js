export default function CardComponent({ cardTitle, cardParagraph, cardImg }){
    return (
        <div>
            <h3>{cardTitle}</h3>
            <p>{cardParagraph}</p>
            <img src={cardImg} alt='' />
        </div>
    )
}