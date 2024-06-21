const Filter = ({ setShowAll, filter, setFilter }) => {
    
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)

        if(event.target.value === ''){
        setShowAll(true)
        }
        else{
        setShowAll(false)
        }
    }

    return (
        <div>Filter with
            <input 
            value = {filter}
            onChange = {handleFilterChange}
            />
        </div>

    )
}

export default Filter;