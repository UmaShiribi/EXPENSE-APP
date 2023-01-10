import axios from "axios"
import omit from "lodash/omit"

export const startCategoriesCreate = (requestData, resolve) =>{
    return (dispatch) => {
        axios.post("http://localhost:4200/api/user/category", requestData, {
            headers:{
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const categoryData = response.data
                if(categoryData.hasOwnProperty("errors")){
                    window.alert(categoryData.message)
                }else{
                    //console.log(categoryData)
                    dispatch(categoriesCreate(categoryData))
                    resolve()
                }
            })
            .catch((err)=>{
                window.alert(`category create ${err.message}`)
            })
    }   
}

const categoriesCreate = (data) => {
    return {
        type: "CATEGORY_CREATE",
        payload: data
    }
}

export const startCategoriesList = () =>{
    return (dispatch) => {
        axios.get("http://localhost:4200/api/user/category",{
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const categoriesData = response.data
                if(categoriesData.hasOwnProperty("errors")){
                    window.alert(categoriesData.message)
                }else{
                    dispatch(categoriesList(categoriesData))
                }
            })
        .catch((err)=>{
            window.alert(`Category List ${err.message}`)
        })
    }
}

const categoriesList = (data) =>{
    return{
        type:"CATEGORY_LIST",
        payload:data
    }
}

export const startCategoriesUpdate = (requestData) => {
    const data = omit(requestData, ["id", "resolve"])
    return (dispatch) => {
        axios.put(`http://localhost:4200/api/user/category/${requestData.id}`, data, {
            headers: {
                "Authorization": localStorage.getItem("tokenExp")
            }
        })
            .then((response) => {
                const categoriesData = response.data
                if (categoriesData.hasOwnProperty("errors")) {
                    window.alert(categoriesData.message)
                } else {
                    dispatch(categoriesUpdate(categoriesData))
                    requestData.resolve && requestData.resolve()
                }
            })
            .catch((err) => {
                window.alert(`Category Update ${err.message}`)
            })
    }
}
const categoriesUpdate = (data) => {
    return {
        type: "CATEGORY_UPDATE",
        payload: data
    }
}

export const startCategoriesShow = (id,resolve)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:4200/api/user/category/${id}`,{
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const showData = response.data
                if(showData.hasOwnProperty("errors")){
                    window.alert(showData.message)
                }else{
                    resolve(showData)
                }
            })
            .catch((err)=>{
                window.alert(`Category Show ${err.message}`)
            })
    }
}

export const startCategoriesDestroy = (id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:4200/api/user/category/${id}`, {
            headers:{
                "Authorization":localStorage.getItem("tokenExp")
            }
        })
            .then((response)=>{
                const categoryData = response.data
                if(categoryData.hasOwnProperty("errors")){
                    window.alert(categoryData.message)
                }else if(categoryData.hasOwnProperty("notice")){
                    window.alert(categoryData.notice)
                }else{
                    dispatch(categoryDestroy(categoryData))
                }
            })
            .catch((err)=>{
                window.alert(`Category Destroy ${err.message}`)
            })
    }
}
const categoryDestroy = (data)=>{
    return {
        type:"CATEGORY_DESTROY",
        payload:data
    }
}

export const startCategoryLogout = ()=>{
    return {
        type : "CATEGORY_LOGOUT"
    }
}


