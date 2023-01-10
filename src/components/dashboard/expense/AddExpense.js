import React ,{useState} from "react"
import{Modal, Button} from "react-bootstrap"
import ExpenseForm from "./ExpenseForm"
import { useDispatch } from "react-redux"
import { startExpenseCreate } from "../../../redux/actions/expenseAction"

const AddExpense = (props)=>{
    const dispatch = useDispatch()
    const[show,setShow] = useState(false)
    const handleClose=()=>{
        setShow(!show)
    }
    const formSubmit = (requestData,resolve)=>{
        dispatch(startExpenseCreate(requestData, resolve))
    }
    return(
        <>
            <Button variant="primary" onClick={handleClose}>
                Add Expense
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExpenseForm formSubmit={formSubmit} handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddExpense