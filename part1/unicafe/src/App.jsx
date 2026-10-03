import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if(good || neutral || bad){
    return (
      <table>
        <tbody>
           <StatisticsLine text='Good' value={good}/>
          <StatisticsLine text='Neutral' value={neutral}/>
          <StatisticsLine text='Bad' value={bad}/>
          <StatisticsLine text='Total' value={total}/>
          <StatisticsLine text='Average' value={average}/>
          <StatisticsLine text='Positive' value={positive + ' %'}/>
        </tbody>
       
      </table>
    )
  }

  return <p>No feedback given</p>
  
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const calculateAverage = (good, bad, total) => {
    return ((good * 1) + (bad * -1))/total
  }

  const calculatePositive = (good, total) => {
    return ((good/total) * 100);
  }

  const handleGood = () => {
    const updatedGood = good + 1;
    const updatedTotal = updatedGood + neutral + bad;
    setGood(updatedGood);
    setTotal(updatedTotal);
    setAverage(calculateAverage(updatedGood, bad, updatedTotal));
    setPositive(calculatePositive(updatedGood, updatedTotal))
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedTotal = updatedNeutral + bad + good;
    setNeutral(updatedNeutral);
    setTotal(updatedTotal);
    setAverage(calculateAverage(good, bad, updatedTotal));
    setPositive(calculatePositive(good, updatedTotal));

  }

  const handleBad = () => {
    const updatedBad = bad + 1;
    const updatedTotal = updatedBad + neutral + good;
    setBad(updatedBad);
    setTotal(updatedTotal);
    setAverage(calculateAverage(good, updatedBad, updatedTotal));
    setPositive(calculatePositive(good, updatedTotal));
  }



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text='Good' />
      <Button onClick={handleNeutral} text='Neutral' />
      <Button onClick={handleBad} text='Bad' />
      <h1>Statistics</h1>
      <Statistics 
        good={good} neutral={neutral} bad={bad} 
        total={total} average={average} positive={positive}
      />

    </div>
  )
}
export default App
