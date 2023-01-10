import React from "react"
import { Table, Row } from "react-bootstrap"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = (props) => {
    const { searchExpense, expenseToggle } = props
    return (
        <Row>
            <div className="col-12 mt-4">
                {
                    searchExpense.length > 0 ? (
                        <Table  responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th>Expense Date</th>
                                    {
                                        !expenseToggle && (
                                            <th>Edit</th>
                                        )
                                    }
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchExpense.map((expense) => {
                                        return <ExpenseItem key={expense._id} {...expense} expenseToggle={expenseToggle} />
                                    })
                                }
                            </tbody>
                        </Table>
                    ) : (
                        <span>No data found</span>
                    )
                }
            </div>
        </Row>
    )
}

export default ExpenseList