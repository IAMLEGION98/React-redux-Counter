export const add = (val) => {
    return {
        type: 'Add',
        num: val
    }
}

export const multiply = (val) => {
    return {
        type: 'Multiply',
        num: val
    }
}