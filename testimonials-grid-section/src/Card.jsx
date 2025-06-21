import './styles/Card.scss'

export default function Card({ name, border, img, header, children, backgroundColor, color, gridArea }) {

    const imgStyles = {
        border: border ? border : "none"
    }

    const cardStyles = {
        backgroundColor,
        color,
        gridArea
    }

    return (
        <article className="card" style={cardStyles}>
            <div className="profile">
                <img alt="User avatar" className="profile__avatar" src={img} style={imgStyles} />
                <div className="profile__info">
                    <span className="profile__name">{name}</span>
                    <span className="profile__role">Verified Graduate</span>
                </div>
            </div>
            <h1 className="card__header">{header}</h1>
            <blockquote className="card__text">{children}</blockquote>
        </article>
    )
}