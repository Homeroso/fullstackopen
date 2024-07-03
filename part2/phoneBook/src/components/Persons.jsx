import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons, setPersons, filter, showAll }) => {

    //filter the notebook
    const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.search(filter) > -1)

    const handleDelete = id => {
        if(window.confirm(`Delete ${persons.find(person => person.id === id).name}?`))
            personService
            .deletePerson(id)
            .then(() => {
                console.log('Delete successful')
                window.location.reload(false);
            })
            
    }
    

    return (
        <ul>
            {personsToShow.map(person => 
                <Person 
                    key = {person.name} 
                    name = {person.name} 
                    phone = {person.number} 
                    handleDelete = {() => handleDelete(person.id)}
            />)}
        </ul>
    )
}

export default Persons;