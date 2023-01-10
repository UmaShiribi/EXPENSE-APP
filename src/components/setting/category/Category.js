import React, {useState} from "react"
import { Button } from "react-bootstrap"
import CategoryList from "./CategoryList"
import DeleteCategory from "./DeleteCategory"

const Category = (props)=>{
    const[isDeletedToggle, setIsDeletedToggle] = useState(false)
    
    const handleIsDeletedToggle =()=>{
        setIsDeletedToggle(!isDeletedToggle)
    }
    return(
        <div>
            <Button onClick={handleIsDeletedToggle} variant={isDeletedToggle ? "delete-success" : "delete-danger"}>
                {
                    isDeletedToggle ? "Show UnDeletedCategories" :"Show deleted Categories"
                }
            </Button>
            {
                isDeletedToggle ? (
                    <>
                        <h6 className="mt-4 mb-3">Deleted Categories</h6>
                        <DeleteCategory/>
                    </>
                ) : (
                    <>
                        <h6 className="mt-4 mb-3">Un Deleted Categories</h6>
                        <CategoryList/>
                    </>
                )
            }
        </div>
    )
}

export default Category