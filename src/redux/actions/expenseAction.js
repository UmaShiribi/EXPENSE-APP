import axios from 'axios'
import omit from "lodash/omit"


export const startExpenseCreate = (requestData, resolve) => {
    return (dispatch) => {
        axios.post("http://localhost:4200/api/user/expenses", requestData, {
            headers: {
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
                console.log(response)
                const createData = response.data
                if (createData.hasOwnProperty("errors")) {
                    window.alert(createData.message)
                } else {
                    dispatch(expenseCreate(createData))
                    resolve()
                }
            })
            .catch((err) => {
                window.alert(`Expense Create : ${err.message}`)
            })
    }
}
const expenseCreate = (data) => {
    return {
        type: "EXPENSE_CREATE",
        payload: data
    }
}


export const startExpenseList = () => {
    return (dispatch) => {
        axios.get("http://localhost:4200/api/user/expenses", {
            headers: {
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
                const listingData = response.data
                if (listingData.hasOwnProperty("errors")) {
                    window.alert(listingData.message)
                } else {
                    dispatch(expenseList(listingData))
                }
            })
            .catch((err) => {
                window.alert(`Expense list : ${err.message}`)
            })
    }
}
const expenseList = (data) => {
    return {
        type: "EXPENSE_LIST" ,
        payload: data
    }
}


export const startExpenseUpdate = (requestData,resolve) => {
    //console.log(requestData)
    const data = omit(requestData,["_id"])
    return (dispatch) => {
        axios.put(`http://localhost:4200/api/user/expense/${requestData._id}`, data , {
            headers: {
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
               // console.log(response)
                const updateData = response.data
                if (updateData.hasOwnProperty("errors")) {
                    window.alert(updateData.message)
                } else {
                    dispatch(expenseUpdate(updateData))
                    console.log("res",updateData)
                    resolve()
                }
            })
            .catch((err) => {
                window.alert(`Expense update : ${err.message}`)
            })
    }
}
const expenseUpdate = (data) => {
    return {
        type: "EXPENSE_UPDATE",
        payload: data
    }
}

export const startExpenseDestroy = (id) => { 
    return (dispatch)=>{
        axios.get(`http://localhost:4200/api/user/expense/${id}`,{
            headers:{
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
                const updateData = response.data
                if (updateData.hasOwnProperty("errors")) {
                    window.alert(updateData.message)
                } else {
                    dispatch(expenseDestroy(updateData))
                }
            })
            .catch((err) => {
                window.alert(`Expense destroy : ${err.message}`)
            })
    }
}
const expenseDestroy = (data) => {
    return {
        type: "EXPENSE_DESTROY",
        payload: data
    }
}


export const startExpenseChart = (resolve) => {
    return (dispatch)=>{
        axios.get("http://localhost:4200/api/user/expensesChart",{
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const chartData = response.data
                if (chartData.hasOwnProperty("errors")) {
                    window.alert(chartData.message)
                } else {
                    resolve(chartData)
                }
            })
            .catch((err) => {
                window.alert(`Expense chart : ${err.message}`)
            })
    }
}

export const startExpenseLogout = () => {
    return {
        type: "EXPENSE_LOGOUT"
    }
}