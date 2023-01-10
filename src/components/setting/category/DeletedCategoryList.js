import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap"
import { startCategoriesUpdate } from "../../../redux/actions/categoriesAction";

const DeletedCategoryList = (props) => {
    const { title, _id } = props
    const dispatch = useDispatch()
    return (
        <tr>
            <td>{title}</td>
            <td><Button variant="success" onClick={() => {
                dispatch(startCategoriesUpdate({ isDeleted: false, id: _id }))
            }}>Undo Delete</Button></td>
        </tr>
    )
}

export default DeletedCategoryList