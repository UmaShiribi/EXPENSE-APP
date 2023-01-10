import React from "react"
import {useDispatch} from "react-redux"
import {startCategoriesCreate} from "../../../redux/actions/categoriesAction"
import CategoryForm from "./CategoryForm"
import "../../../assets/css/categorySettings.css"

const AddCategory = (props)=>{
    const dispatch = useDispatch()

    const formSubmission = (data,resolve)=>{
        dispatch(startCategoriesCreate(data,resolve))
    }

    return(
        <div className="category-form">
            <CategoryForm formSubmission = {formSubmission}/>
        </div>
    )
}

export default AddCategory
