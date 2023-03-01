const todoReducer = (state, action) => {
    const {type, payload} = action;
    switch (action.type) {
        case 'ADDTODO':
            let obj = {
                title: payload,
                id: Date.now()
            }
            return [...state, obj]
        case 'DELETETODO':
            let retArr = state.filter((item) => {
                return item.id !== payload
                })
            return [...retArr]
        default:
            return state
    }
}

export { todoReducer }


// [
//     {
//         title: 'Go to market',
//         id: 123399988
//     },
//     {
//         title: 'aaa',
//         id: 12311
//     },
//     {
//         title: 'aaa',
//         id: 12311
//     },
//     {
//         title: 'aaa',
//         id: 12311
//     },
//     {
//         title: 'aaa',
//         id: 1234
//     },
//     {
//         title: 'Go to market',
//         id: 12388
//     }
// ]