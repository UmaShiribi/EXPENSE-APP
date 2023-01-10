import React, { useState } from "react"
import { Row, Form,Button } from "react-bootstrap"
import { useSelector } from "react-redux"

import AddExpense from "./AddExpense"
import ExpenseList from "./ExpenseList"

import Pagination from "./Pagination"


const Expense = (props) => {
    const [expenseToggle,setExpensetoggle] = useState(false)
    const [searchData, setSearchData] = useState("")

    const handleExpenseToggle = ()=>{
        setExpensetoggle(!expenseToggle)
    }
    const expenses = useSelector((state) => {
        return state.expenses
    })

    const  searchExpenseUnDeleted = expenses.filter((expense) => {
        return expense.title.toLowerCase().includes(searchData.toLowerCase()) && expense.isDeleted === false
    })
    const searchExpenseDeleted = expenses.filter((expense) => {
        return expense.title.toLowerCase().includes(searchData.toLowerCase()) && expense.isDeleted === true
    })

    // pagiNation
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(5)
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const toggleDeleted =  expenseToggle ? searchExpenseDeleted : searchExpenseUnDeleted
    const currentRecords = toggleDeleted.slice(indexOfFirstRecord, indexOfLastRecord)
    const nPages = Math.ceil(toggleDeleted.length / recordsPerPage)
    
    return (
        <div>
            <Row>
                <div className="col-md-3">
                    <AddExpense />
                </div>
                <div className="col-md-3">
                    <Button onClick={handleExpenseToggle} variant={expenseToggle ? "success" : "danger"}>
                        {expenseToggle?"Show Expenses":"Show Deleted Expense"}
                    </Button>
                </div>
                <div className="col-md-6">
                    <Form.Control
                        type="text"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        placeholder="Search Expense"
                    />
                </div>
            </Row>
            {
                expenses.length>0 ? (
                    <ExpenseList searchExpense={currentRecords} expenseToggle={expenseToggle}/>
                ) : (
                    <span style={{color:"red"}}>No data found , Please Create Expense</span>
                )
            }
            {
                expenseToggle ? searchExpenseDeleted.length>5 : searchExpenseUnDeleted.length>5 && (
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )
            }
        </div>
    )
}

export default Expense