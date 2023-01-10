import React, {useState} from "react"
import {Button, Form} from "react-bootstrap"

const CategoryForm = (props)=>{
    const{title:categoryTitle,isCategoryToggle,handleCategoryToggle, formSubmission} = props

    const [title, setTitle] = useState(categoryTitle ? categoryTitle : "")
    const [formError, setFormError] = useState({})
    const formErr = {}

    const handleFormError=()=>{
        if(title.trim().length===0){
            formErr.titleError="title is empty"
        }
    }
    const handleInputChange=(e)=>{
        if(e.target.name==="title"){
            setTitle(e.target.value)
        }
        setFormError({})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        handleFormError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
        }else{
            const resolve=()=>{
                setTitle("")
                setFormError({})
                if(isCategoryToggle){
                    handleCategoryToggle()
                }
            }
            const data={
                title
            }
           // console.log(data)
            formSubmission(data, resolve)
        }
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        name="title"
                        onChange={handleInputChange}
                        placeholder="Enter category"
                        style={{width:"50%"}}
                    />
                    {
                        formError.titleError && <Form.Text>{formError.titleError}</Form.Text>
                    }
                </Form.Group>
                <input type="submit" value="submit" className="btn btn-primary mt-3"/>
                {
                    isCategoryToggle && <Button className="ms-3 mt-3" variant="secondary" onClick={handleCategoryToggle}>Cancle</Button>
                }
            </Form>
        </div>
    )

}

export default CategoryForm