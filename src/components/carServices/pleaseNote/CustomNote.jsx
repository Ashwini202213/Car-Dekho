
export default function CustomNote(props) {
    return (
        <div>
            <h5 className="fw-bold">{props.heading}</h5>
            <p className="fontSize">{props.disclaimer}</p>
            <p className="fontSize">{props.info}</p>
        </div>
    )
}