import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import DeletedCategoryList from "./DeletedCategoryList";

const DeleteCategory =(props)=>{
    const categories = useSelector((state)=>{
        return state.categories
    })
    const categoriesDeleted = categories.filter((category)=>{
        return category.isDeleted===true
    })
    return(
        <div>
            {
                categoriesDeleted.length ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>Title of the category</th>
                                <th>Un Deleted categories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoriesDeleted.map((category)=>{
                                    return <DeletedCategoryList key={category._id} {...category}/>
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    <span style={{color:"red"}}>No deleted category</span>
                )
            }
        </div>
    )
}

export default DeleteCategory