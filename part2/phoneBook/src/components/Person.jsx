const Person = ({ name, phone, handleDelete }) => {
    return (
        <div>
            <li>{name} {phone}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Person;