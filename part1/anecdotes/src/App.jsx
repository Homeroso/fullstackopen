import { useState } from 'react'

const IndexOfMax = (array) => {
  let max = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] > array[max]){
        max = i
      }
  }
  return max
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)
  
  const handleSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = (selected) => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setMostVoted(IndexOfMax(copy))
    console.log(mostVoted)
  }

  return (
    <>
      <h4>{anecdotes[selected]}</h4>
      <p>This anecdote has {points[selected]} votes</p>
      <button onClick = {() => handleVote(selected)}>Vote</button>
      <button onClick = {handleSelect}>Next anecdote</button>
      <h3>Most voted</h3>
      <h4>{anecdotes[mostVoted]}</h4>
      <p>Has {points[mostVoted]} votes</p>
    </>
  )
}

export default App
