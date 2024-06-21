const Total = ({ course }) => {

    const sumTotal = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
    return(
      <p>Number of exercises {sumTotal}</p>
    )
}

export default Total