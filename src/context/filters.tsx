import { createContext, useState } from "react";
import { FilterValue } from "../interfaces/todos";
import { TODO_FILTER } from "../const";

interface FitlerContext{
    filterSelected: FilterValue,
    setFilterSelected: (filter: FilterValue) => void
}

const initialValue: FitlerContext = {
    filterSelected: 'all',
    setFilterSelected: function (filter: FilterValue): void {
        throw new Error(`Function not implemented .${filter}`);
    }
}

export const FilterContext = createContext<FitlerContext>(initialValue);

export function FilterProvider({children}: React.PropsWithChildren){
    const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTER.ALL);

    return (
        <FilterContext.Provider value={{
            filterSelected,
            setFilterSelected
        }}>
            {children}
        </FilterContext.Provider>
    )
}