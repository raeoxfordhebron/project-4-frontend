import { useState } from "react"

const useSearch = (originalValue, filterFunction) => {
    const [displayedValues, setDisplayedValues] = useState(originalValue)

const filterValues = (searchTerm) => {
    return setDisplayedValues(filterFunction(searchTerm))
}

const reset = () => {
    return setDisplayedValues(originalValue)
}

    return [displayedValues, filterValues, reset]
} 

export default useSearch