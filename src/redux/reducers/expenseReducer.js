const initialValue = []

const expenseReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "EXPENSE_CREATE": {
            return [...state, action.payload]
        }
        case "EXPENSE_LIST": {
            return [...action.payload]
        }
        case "EXPENSE_UPDATE": {
            return state.map((expense) => {
                if (expense._id === action.payload._id) {
                    return { ...expense, ...action.payload }
                } else {
                    return { ...expense }
                }
            })
        }
        case "EXPENSE_DESTROY": {
            return state.filter((expense) => {
                return expense._id !== action.payload
            })
        }
        case "EXPENSE_LOGOUT": {
            return []
        }
        default: {
            return [...state]
        }
    }
}

export default expenseReducer