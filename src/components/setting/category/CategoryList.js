import React from "react"
import {Table} from "react-bootstrap"
import { useSelector } from "react-redux"
import CategoryItem from "./CategoryItem"

const CategoryList = (props)=>{

    const categories = useSelector((state)=>{
        return state.categories
    })
    const categoriesunDeleted = categories.filter((category)=>{
        return !category.isDeleted
    })

    return(
        <div>
            {
                categories.length>0 ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoriesunDeleted.map((category)=>{
                                    return <CategoryItem key={category._id} {...category}/>
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    <span style={{color:"red"}}>No data found, Create category</span>
                )
            }
        </div>
    )
}

export default CategoryList