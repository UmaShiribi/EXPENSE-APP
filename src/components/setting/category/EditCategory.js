import React from "react"
import { useDispatch } from "react-redux"
import { startCategoriesUpdate } from "../../../redux/actions/categoriesAction"
import CategoryForm from "./CategoryForm"

const EditCategory = (props) => {
    const { _id, title, isCategoryToggle, handleCategoryToggle } = props
    const dispatch = useDispatch()

    const formSubmission = (data, resolve) => {
        data.id = _id
        data.resolve = resolve
        dispatch(startCategoriesUpdate(data, resolve))
    }
    return (
        <div>
            <CategoryForm
                formSubmission={formSubmission}
                title={title}
                isCategoryToggle={isCategoryToggle}
                handleCategoryToggle={handleCategoryToggle}
            />
        </div>
    )
}

export default EditCategory