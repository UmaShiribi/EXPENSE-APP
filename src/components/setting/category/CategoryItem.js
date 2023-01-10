import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"

import { startCategoriesUpdate } from "../../../redux/actions/categoriesAction"
import EditCategory from "./EditCategory"

const CategoryItem = (props) => {
    const { _id, title } = props
    const [isCategoryToggle, setIsCategoryToggle] = useState(false)
    const dispatch = useDispatch()

    const handleCategoryToggle = () => {
        setIsCategoryToggle(!isCategoryToggle)
    }

    return (
        <tr>
            {
                isCategoryToggle ? (
                    <>
                        <td>
                            <EditCategory
                                _id={_id}
                                title={title}
                                isCategoryToggle={isCategoryToggle}
                                handleCategoryToggle={handleCategoryToggle}
                            />
                        </td>
                        <td></td>
                        <td><Button onClick={() => {
                            dispatch(startCategoriesUpdate({ isDeleted: true, id: _id }))
                        }}  >Delete</Button></td>
                    </>
                ) : (
                    <>
                        <td>{title}</td>
                        <td><Button onClick={handleCategoryToggle}>Edit</Button></td>
                        <td><Button onClick={() => {
                            dispatch(startCategoriesUpdate({ isDeleted: true, id: _id }))
                        }}
                        >Delete</Button></td>
                    </>
                )
            }
        </tr>
    )
}

export default CategoryItem