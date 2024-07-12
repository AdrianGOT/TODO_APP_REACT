import { FILTER_BUTTONS } from '../const';
import { useFilter } from '../hooks/useFilter';
import { FilterValue } from '../interfaces/todos';

interface Props { }

export const Filters: React.FC<Props> = () => {

    const { filterSelected, setFilterSelected } = useFilter();


    const handleFilter = (key: FilterValue) => {
        setFilterSelected(key);
    }

    return (
        <ul className='filters'>
            {
                Object.entries(FILTER_BUTTONS).map(
                    ([key, { href, text }]) => {
                        const className = key === filterSelected ? 'selected' : '';
                        return (
                            <li key={key}>
                                <a
                                    href={href}
                                    className={className}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleFilter(key as FilterValue)
                                    }}>
                                    {text}
                                </a>
                            </li>
                        )
                    })
            }

        </ul>
    )
}