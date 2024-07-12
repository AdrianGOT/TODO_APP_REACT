import { useContext } from "react"
import { FilterContext } from "../context/filters"

export const useFilter = () => {

    const {filterSelected, setFilterSelected} = useContext(FilterContext);

    return {
        filterSelected,
        setFilterSelected
    }
}