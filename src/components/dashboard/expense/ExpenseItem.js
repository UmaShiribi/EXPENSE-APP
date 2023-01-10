import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startExpenseUpdate } from "../../../redux/actions/expenseAction"
import { startCategoriesShow } from "../../../redux/actions/categoriesAction"
import EditExpense from "./EditExpense";

const ExpenseItem = (props) => {
    const { _id, title, amount, category, expenseDate, expenseToggle } = props
    const dispatch = useDispatch()
    const [categoryData, setCategoryData] = useState("")

    useEffect(() => {
        const categoryDataReq = (data) => {
            setCategoryData(data)
        }
        dispatch(startCategoriesShow(category, categoryDataReq))
    }, [])

    const resolve = () => {
        window.alert(`${title} is successfully ${expenseToggle ? "Un-deleted" : "Deleted"}`)
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{amount}</td>
            <td>
                {
                    categoryData.isDeleted ? <strike>{categoryData.title}</strike> : <span>{categoryData.title}</span>
                }
            </td>
            <td>{expenseDate.slice(8, 10)}-{expenseDate.slice(5, 7)}-{expenseDate.slice(0, 4)}</td>
            {
                !expenseToggle && (
                    <td>
                        <EditExpense
                            _id={_id}
                            title={title}
                            amount={amount}
                            category={category}
                            expenseDate={expenseDate}
                        />
                    </td>
                )
            }
            <td> <Button variant="danger" onClick={() => {
                dispatch(startExpenseUpdate( { isDeleted:expenseToggle?false:true , _id } , resolve))
            }}>Delete</Button> </td>
        </tr>
    )
}

export default ExpenseItem