import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { startBudgetUpdate } from "../../../redux/actions/budgetAction"
import "../../../assets/css/budget.css"

const BudgetForm = (props)=>{
    const {handleIsToggle,amount:budgetAmount} = props
    const dispatch = useDispatch()
    const [amount,setAmount] = useState(budgetAmount)
    const [formError,setFormError] = useState({})
    const formErr = {}

    const handleFromError = ()=>{
        if(amount.trim().length===0){
            formErr.amountError = "Amount is Empty"
        }
    }
    const handleInputChange =(e)=>{
        if(e.target.name==="amount"){
            setAmount(e.target.value)
        }
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        handleFromError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
        }else{
            const data = {
                amount
            }
            console.log(data)
            const resolve = ()=>{
                setAmount("")
                handleIsToggle()
            }
            dispatch(startBudgetUpdate(data,resolve))
        }
    }

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Budget</Form.Label>
                    <Form.Control type="text" value={amount} name="amount" onChange={handleInputChange} />
                    {
                        formError.amountError && <Form.Text>{formError.amountError}</Form.Text>
                    }
                </Form.Group>
                <div className="budget-form-btns">
                    <input type={"submit"} value="Submit" className="btn btn-primary"/>
                    <Button variant="secondary" onClick={handleIsToggle}>Cancle</Button>
                </div>
            </Form>
        </div>
    )
}
export default BudgetForm