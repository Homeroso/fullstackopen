import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  
  useEffect(() => {
    personService
      .getAll()
      .then(
        initialPersons => {
          setPersons(initialPersons)
        }
      )
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <h3>Filter</h3>
      <Filter setShowAll = {setShowAll} filter={filter} setFilter={setFilter}/>
      <h3>Add a new person</h3>
      <PersonForm persons = {persons} setPersons = {setPersons} setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} filter = {filter} showAll={showAll}/>      
    </div>
  )
}

export default App
