const Form = ({ setFilter, setShowAll }) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        console.log(event.target.value)
        if(event.target.value ==='')
            setShowAll(true)
        else
            setShowAll(false)
    }

    return(
        <div>
            Find countries:  
            <input 
                type="text" 
                onChange={handleFilterChange}
                />
        </div>
    )

}

export default Form