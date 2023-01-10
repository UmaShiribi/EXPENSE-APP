import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { startCategoriesList } from '../../../redux/actions/categoriesAction';
import { startExpenseList } from '../../../redux/actions/expenseAction';
import "../../../assets/css/budgetChart.css"
import ChartTableExpense from './ChartTableExpense';

const ExpenseChart = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startCategoriesList())
        dispatch(startExpenseList())
    }, [])

    const categories = useSelector((state) => {
        return state.categories.filter((category) => {
            return category.isDeleted === false
        })
    })

    const expenses = useSelector((state) => {
        return state.expenses.filter((expense) => {
            return expense.isDeleted === false
        })
    })

    let result = []
    categories.forEach((category) => {
        let titleCategory = category.title
        let sum = 0
        expenses.forEach((expense) => {
            if (category._id === expense.category) {
                sum += Number(expense.amount)
            }
        })
        result.push({ titleCategory, sum })
    })

    let labelExpense = result.map((ele) => {
        return ele.titleCategory
    })
    let valuesExpense = result.map((ele) => {
        return ele.sum
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: labelExpense,
        datasets: [
            {
                label: 'Expenses',
                data: valuesExpense,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
            <div className="chart-calulation">
                {
                    result.length > 5 ? (
                        <>
                            <ChartTableExpense result={result}/>
                        </>
                    ) : (
                        <>
                            <Pie data={data} />
                            <div className='chart-titles'>
                                {
                                    result.map((ele, i) => {
                                        return <p key={i}>{ele.titleCategory} - {ele.sum}</p>
                                    })
                                }
                            </div>
                        </>
                    )
                }
            </div>
    )
}

export default ExpenseChart