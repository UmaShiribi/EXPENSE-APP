import axios from "axios"

export const startBudgetCreate = (id) => {
    return (dispatch) => {
        axios.post("http://localhost:4200/api/user/budget", { user: id }, {
            headers: {
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
                const budgetData = response.data
                if (budgetData.hasOwnProperty("errors")) {
                    window.alert(budgetData.message)
                } else {
                    //console.log(budgetData)
                    dispatch(budgetCreate(budgetData))
                }
            })
            .catch((err) => {
                window.alert(`Budget Create ${err.message}`)
            })
    }
}

const budgetCreate = (data) => {
    return {
        type: "BUDGET_CREATE",
        payload: data
    }
}

export const startBudgetList = (data) => {
    return (dispatch) => {
        axios.get("http://localhost:4200/api/user/budget", {
            headers: {
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
                //console.log(response)
                const budgetData = response.data
                if (budgetData.hasOwnProperty("errors")) {
                    window.alert(budgetData.message)
                } else {
                    dispatch(budgetList(budgetData))
                }
            })
            .catch((err) => {
                window.alert(`Buget List ${err.message}`)
            })
    }
}

const budgetList = (data) => {
    return {
        type: "BUDGET_LIST",
        payload: data
    }
}

export const startBudgetUpdate = (requestData, resolve) => {
    console.log("b", requestData)
    return (dispatch) => {
        axios.put("http://localhost:4200/api/user/budget", requestData, {
            headers: {
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
                console.log(response)
                const budgetData = response.data
                if (budgetData.hasOwnProperty("errors")) {
                    window.alert(budgetData.message)
                } else {
                    dispatch(budgetUpdate(budgetData))
                    resolve()
                }
            })
            .catch((err) => {
                window.alert(`Buget Update ${err.message}`)
            })
    }
}
const budgetUpdate = (data) => {
    return {
        type: "BUDGET_UPDATE",
        payload: data
    }
}

// export const startBudgetDestroy = () => {
//     return (dispatch) => {
//         axios.delete("http://localhost:4200/api/user/budget", {
//             headers: {
//                 "Authorization": localStorage.getItem("tokenExp")
//             }
//         })
//             .then((response) => {
//                 const budgetData = response.data
//                 if (budgetData.hasOwnProperty("errors")) {
//                     window.alert(budgetData.message)
//                 } else {
//                     dispatch(budgetDestroy(budgetData))
//                 }
//             })
//     }

//     const budgetDestroy = (data) => {
//         return {
//             type: "BUDGET_DESTROY",
//             payload: data
//         }
//     }
// }

export const startBudgetLogout = () => {
    return {
        type: "BUDGET_LOGOUT"
    }
}