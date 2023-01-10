import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useSelector } from "react-redux"

const ExpenseForm = (props) => {
    const {
        formSubmit,
        handleClose,
        title: expenseTitle,
        amount: expenseAmount,
        category: expenseCategory,
        expenseDate: expensedate
    } = props

    const [title, setTitle] = useState(expenseTitle ? expenseTitle : "")
    const [category, setCategory] = useState(expenseCategory ? expenseCategory : "")
    const [amount, setAmount] = useState(expenseAmount ? expenseAmount : 0)
    const [expenseDate, setExpenseDate] = useState(expensedate ? expensedate.slice(0, 10) : "")
    const [formErrors, setFormErrors] = useState({})
    const formErr = {}

    const categories = useSelector((state) => {
        return state.categories.filter((category) => {
            return category.isDeleted === false
        })
    })
    const handleFormError = () => {
        if (title.trim().length === 0) {
            formErr.titleErr = "Title is empty"
        }
        if (category.trim().length === 0) {
            formErr.categoryErr = "Select Category"
        }
        if (amount.length === 0) {
            formErr.amountErr = "Amount is empty"
        }
        if (expenseDate.trim().length === 0) {
            formErr.dateErr = "select date"
        }
    }
    const handleChange = (e) => {
        const inputName = e.target.name
        if (inputName === "title") {
            setTitle(e.target.value)
        } else if (inputName === "category") {
            setCategory(e.target.value)
        } else if (inputName === "amount") {
            setAmount(e.target.value)
        } else if (inputName === "expenseDate") {
            setExpenseDate(e.target.value)
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleFormError()
        if (Object.keys(formErr).length > 0) {
            setFormErrors(formErr)
        } else {
            const data = {
                title, amount, category, expenseDate
            }
            const resolve = () => {
                setTitle("")
                setCategory("")
                setAmount("")
                setExpenseDate("")
                handleClose()
            }
            formSubmit(data, resolve)
        }
    }
    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mt-2">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        name="title"
                        onChange={handleChange}
                        placeholder="Enter title"
                    />
                </Form.Group>
                {
                    formErrors.titleErr && <Form.Text>{formErrors.titleErr}</Form.Text>
                }
                <Form.Group className="mt-2">
                    <Form.Label>Select category</Form.Label>
                    <Form.Select value={category} name="category" onChange={handleChange} >
                        <option value="">Select Category</option>
                        {
                            categories.map((category) => {
                                return <option key={category._id} value={category._id}>{category.title}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                {
                    formErrors.categoryError && <Form.Text>{formErrors.categoryError}</Form.Text>
                }
                <Form.Group className="mt-2">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="text"
                        value={amount}
                        name="amount"
                        onChange={handleChange}
                        placeholder="Enter amount"
                    />
                </Form.Group>
                {
                    formErrors.amountErr && <Form.Text>{formErrors.amountErr}</Form.Text>
                }
                <Form.Group className="mt-2">
                    <Form.Label>ExpenseDate</Form.Label>
                    <Form.Control
                        type="date"
                        value={expenseDate}
                        name="expenseDate"
                        onChange={handleChange}
                        placeholder="Enter ExpenseDate"
                    />
                </Form.Group>
                {
                    formErrors.dateErr && <Form.Text>{formErrors.dateErr}</Form.Text>
                }
                <div className="form-btns my-3">
                    <input type="submit" value={"submit"} className="btn btn-primary" />
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                </div>
            </Form>
        </>
    )
}

export default ExpenseForm