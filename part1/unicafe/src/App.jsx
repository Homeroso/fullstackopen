import { useState } from 'react'

const StatisticLine = ({ text, statistic}) => {
  return(
    <tr>
      <td>{text} </td><td>{statistic}</td>  
    </tr>
    
  )
}

const Statistics = (props) => {
  if(props.total == 0) return(<p>No feedback given</p>)
  return (
    <table>
      <tbody>
        <StatisticLine text='Good' statistic={props.good}/>
        <StatisticLine text='Neutral' statistic={props.neutral}/>
        <StatisticLine text='Bad' statistic={props.bad}/>
        <StatisticLine text='All' statistic={props.total}/>
        <StatisticLine text='Average' statistic={props.average}/>
        <StatisticLine text='Positive' statistic={props.positive + '%'}/>
      </tbody>
    </table>
  )

}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  //save each button click in its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    let updateGood = good + 1
    setGood(updateGood)
    let updateTotal = updateGood + neutral + bad
    setTotal(updateTotal)
    setAverage((updateGood - bad) / updateTotal)
    setPositive((updateGood / updateTotal) * 100)
  }

  const handleNeutral = () => {
    let updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    let updateTotal = good + updateNeutral + bad
    setTotal(updateTotal)
    setAverage((good - bad) / updateTotal)
    setPositive((good / updateTotal) * 100)
  }

  const handleBad = () =>{
    let updateBad = bad + 1
    setBad(updateBad)
    let updateTotal = good + neutral + updateBad
    setTotal(updateTotal)
    setAverage((good - updateBad) / updateTotal)
    setPositive((good / updateTotal) * 100)
  }
  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </>
  )
}

export default App
