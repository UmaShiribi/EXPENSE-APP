import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import ExpenseForm from "./ExpenseForm"
import { useDispatch } from "react-redux"
import { startExpenseUpdate } from "../../../redux/actions/expenseAction"

const EditExpense = (props) => {
    const { _id, title, amount, category, expenseDate } = props
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(!show);

    const formSubmit = (requestData, resolve) => {
        requestData._id = _id
        dispatch(startExpenseUpdate(requestData, resolve))
    }

    return (
        <>
            <Button variant="warning" onClick={handleClose}>
                Edit Expense
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExpenseForm
                        title={title}
                        amount={amount}
                        category={category}
                        expenseDate={expenseDate}
                        formSubmit={formSubmit}
                        handleClose={handleClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditExpense
