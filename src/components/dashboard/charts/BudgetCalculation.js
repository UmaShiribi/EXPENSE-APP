import React, { useEffect, useState } from "react"
import { Chart as CharJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { useDispatch, useSelector } from "react-redux"
import { startExpenseChart } from "../../../redux/actions/expenseAction"
import "../../../assets/css/budgetChart.css"

const BudgetCalculation = (props) => {
    const dispatch = useDispatch()
    const [chartData, setChartData] = useState({})

    const expenses = useSelector((state) => {
        return state.expenses
    })

    useEffect(() => {
        const resolve = (data) => {
            setChartData(data)
        }
        dispatch(startExpenseChart(resolve))
    }, [expenses])

    CharJS.register(ArcElement, Tooltip, Legend)

    const budgetRemains = Object.keys(chartData).length>0 && chartData.totalBudget - chartData.totalExpense
    const totalBudgetRemains = budgetRemains<0 ? 0 : budgetRemains
    
    // console.log("chartDatas",chartDatas,budgetRemains,totalBudgetRemains)

    const data = {
        labels: [`Total Expenses ${chartData.totalExpense}`, `Total Budget Remains ${totalBudgetRemains}`],
        datasets: [
            {
                label: '',
                data: [chartData.totalExpense, totalBudgetRemains ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className='chart-container'>
            <h6>Total Percentage of Expenses</h6>
            {
                chartData.totalPercentage ? (
                    <div className="chart-calulation">
                        <Doughnut data={data} />
                        <span>Total Percentage of Expenses Done : {chartData.totalPercentage}%</span>
                    </div>
                ) : (
                    <span style={{color:"red"}}>No data found , Please Create Expense and update Budget amount</span>
                )
            }
            {
                budgetRemains < 0 && <span style={{color:"red"}}>Expense is higher then Budget,Update the Budget </span>
            }
        </div>
    )
}
export default BudgetCalculation