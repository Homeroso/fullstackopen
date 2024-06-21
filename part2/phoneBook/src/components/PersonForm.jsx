import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, setMessage }) => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
    
        //Create a new person object
        const personObj = {
          name: newName,
          phone: newPhone
        }
    
        //Check if the name is already in the phonebook
        let nameExists = false
    
        for(let i = 0; i < persons.length; i++){
          if(persons[i].name === newName){
            nameExists = true
          }
        }
    
        if(nameExists){
          //Update the number if the name already exists
          if (window.confirm(`${newName} is already in the phonebook, replace the old number?`))
            {
              personService
                .updateNumber(persons.find(person => person.name === newName).id, personObj)
                .then(returnedPerson => {
                  setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
                })
                .catch(error => {
                  setMessage({
                    class: 'error',
                    text: `Information of ${newName} has already been removed from the server`})
                })
              
              setMessage({
                class: 'success',
                text: `Updated the number of ${newName} in the phonebook to ${newPhone}`})
            }
        }
        //Add the person to the phonebook if the name is not already in the phonebook
        else{
            personService
              .create(personObj)
              .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
              })  
            setMessage({
              class: 'success',
              text:`Added ${newName} to the phonebook`})
            setNewName('')
            setNewPhone('')
        }
    }

    //Handle change in the name input field
    const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    }

    //Handle change in the phone input field
    const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
    }

    return (
        <form>
        <div>
          name: <input 
                  value = {newName}
                  onChange = {handleNameChange}
                />
        </div>
        <div>
          phone: <input
                  value = {newPhone} 
                  onChange = {handlePhoneChange}
                />
        </div>
        <button onClick={addPerson} type="submit">add</button>
      </form>
    )
}

export default PersonForm;