import React, { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import BudgetForm from "./BudgetForm"
import "../../../assets/css/budget.css"
import { startBudgetList } from "../../../redux/actions/budgetAction"

const Budget = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startBudgetList())
    },[])
    const budget = useSelector((state) => {
        return state.budget
    })
    const [isToggle, setIsToggle] = useState(false)
    const handleIsToggle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <div className="budget-main-container">
            <div className="budget-container">
                <h6>Total Budget</h6>
                <div className="budget-toggle-body">
                    {
                        isToggle ? (
                            <>
                                <BudgetForm handleIsToggle={handleIsToggle} {...budget} />
                            </>
                        ) : (
                            <div className="budget-amount">
                                {!isToggle && <h5>Budget : </h5>}
                                <h5>{budget.amount}</h5>
                                <Button variant="dark" onClick={handleIsToggle}>Update</Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Budget
