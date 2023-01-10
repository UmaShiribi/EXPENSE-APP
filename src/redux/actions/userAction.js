import axios from "axios"
import omit from "lodash/omit"

export const startUserRegister = (values, resetForm, redirect)=>{

    return (dispatch)=>{
        axios.post("http://localhost:4200/api/user/register", values )
            .then((response)=>{
                const data = response.data
                if(data.hasOwnProperty("errors")){
                    window.alert(`${data.message}`)
                }else if(data.hasOwnProperty("code")){
                    window.alert(`${Object.keys(data.keyValue)[0]} ${Object.values(data.keyValue)[0]} already registered`)
                }else{
                    dispatch(userRegister(data))
                    resetForm()
                    redirect(data._id)
                   // console.log(data, "line 17")
                }
               
            })
            .catch((err)=>{
                window.alert(`Register ${err.message}`)
            })
    }
}

const userRegister=(data)=>{
    return({
        type: "USER_REGISTER",
        payload: data
    })
}

export const startUserLogin = (requestData,resolve, redirect)=>{
    //console.log(requestData)
    return (dispatch) =>{
        axios.post("http://localhost:4200/api/user/login",requestData)
            .then((response)=>{
                //console.log(response)
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                   // console.log(userData)
                    localStorage.setItem("tokenExp",userData.token)
                    resolve()
                    redirect()
                }
            })
            .catch((err)=>{
                window.alert(`Login ${err.message}`)
            })
    }
}

export const startUserAccount = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:4200/api/user/account", {
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    //console.log(userData)
                    dispatch(userAccount(userData))
                }
            })
            .catch((err)=>{
                window.alert(`Account ${err.message}`)
            })
    }
}

const userAccount = (data)=>{
    return{
        type:"USER_ACCOUNT",
        payload:data
    }
}

export const startUserUpdate = (requestData, resolve)=>{
    const data = omit(requestData,["_id", "password"])
    return(dispatch)=>{
        axios.put("http://localhost:4200/api/user/account",data,{
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const userData = response.data
                if(userData.hasOwnProperty("errors")){
                    window.alert(userData.message)
                }else{
                    dispatch(userUpdate(userData))
                    resolve()
                }
            })
            .catch((err)=>{
                window.alert(`Account upadate ${err.message}`)
            })
    }
}

const userUpdate = (data)=>{
    return{
        type:"USER_UPDATE",
        payload:data
    }
}

export const startUserLogout = ()=>{
    return{
        typr:"USER_LOGOUT"
    }
}