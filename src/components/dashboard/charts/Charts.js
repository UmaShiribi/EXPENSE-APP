import React from "react"
import {Row} from "react-bootstrap"
import BudgetCalculation from "./BudgetCalculation"
import ExpenseChart from "./ExpenseChart"


const Charts = (props)=>{
    return (
        <Row>
            <div className="col-md-6">
                <BudgetCalculation />
            </div>
            <div className="col-md-6">
                <ExpenseChart />
            </div>
        </Row>
    )
}
export default Charts