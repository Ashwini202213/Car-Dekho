export default function Button(props) {
    const { className, name, arrow } = props
    return (
        <div>
            <button className={className} >{name} <span>{arrow}</span></button>
        </div>
    )
}