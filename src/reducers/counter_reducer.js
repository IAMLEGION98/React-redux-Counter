
const count_reducer = (state = 0, action) => {

    switch (action.type) {
        case 'Add':
            return state + action.num;

        case 'Multiply':
            return state * action.num;

        default:
            return state;
    }
}
export default count_reducer;