const initialValue = []

const categoriesReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "CATEGORY_CREATE": {
            return [...state, action.payload]
        }
        case "CATEGORY_LIST": {
            return [...action.payload]
        }
        case "CATEGORY_UPDATE": {
            return state.map((category) => {
                if (category._id === action.payload._id) {
                    return { ...category, ...action.payload }
                } else {
                    return { ...category }
                }
            })
        }
        case "CATEGORY_DESTROY": {
            return state.filter((category) => {
                return category._id !== action.payload._id
            })
        }
        case "CATEGORY_LOGOUT": {
            return []
        }
        default: {
            return [...state]
        }
    }
}

export default categoriesReducer