export const TODO_FILTER ={ 
    ALL: 'all',
    COMPLETED: 'completed',
    UNCOMPLETED: 'uncompleted',
} as const


export const FILTER_BUTTONS  = {
    [TODO_FILTER.ALL]: {
        text: 'Todos',
        href: `/?filter=${TODO_FILTER.ALL}`
    },
    [TODO_FILTER.COMPLETED]: {
        text: 'Completados',
        href: `/?filter=${TODO_FILTER.COMPLETED}`
    },
    [TODO_FILTER.UNCOMPLETED]: {
        text: 'Restantes',
        href: `/?filter=${TODO_FILTER.UNCOMPLETED}`
    },

} as const