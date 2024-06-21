import './App.css'
import Form from './components/Form'
import Countries from './components/Countries'
import { useState } from 'react'


function App() {

  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  return (
    <>
      <Form setFilter={setFilter} setShowAll={setShowAll}/>
      <Countries filter = {filter} showAll={showAll} setFilter={setFilter}/>
    </>
  )
}

export default App
