
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Part2 = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Part3 = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
      <Part1 part = {props.part1} exercise = {props.exercise1}/>
      <Part2 part = {props.part2} exercise = {props.exercise2}/>
      <Part3 part = {props.part3} exercise = {props.exercise3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercise1 = 10;
  const part2 = 'Using props to pass data';
  const exercise2 = 7;
  const part3 = 'State of a component';
  const exercise3 = 14;

  return (
    <div>
      <Header course = {course} />
      <Content 
        part1 = {part1} part2 = {part2} part3 = {part3} 
        exercise1 = {exercise1} exercise2 = {exercise2} exercise3 = {exercise3}
       />
      
      <Total total = {exercise1 + exercise2 + exercise3}/>
    </div>
  )
}

export default App
