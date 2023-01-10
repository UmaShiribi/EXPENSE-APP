const initialValue = {}

const budgetReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "BUDGET_CREATE": {
            return { ...action.payload }
        }
        case "BUDGET_LISt": {
            return { ...action.payload }
        }
        case "BUDGET_UPDATE": {
            return { ...state, ...action.payload }
        }
        case "BUDGET_LOGOUT": {
            return {}
        }
        default: {
            return state
        }
    }
}

export default budgetReducer