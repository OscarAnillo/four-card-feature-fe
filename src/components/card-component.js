import 'animate.css';

export default function CardComponent({ cardTitle, cardParagraph, cardImg, className }){
    return (
        <div className={`${className} card animate__animated animate__flip`}>
            <div className="card-container">
                <h3>{cardTitle}</h3>
                <p>{cardParagraph}</p>
                <img src={cardImg} alt='' />
            </div>
        </div>
    )
}