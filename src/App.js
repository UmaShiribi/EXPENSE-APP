import React, { useEffect } from "react"
import NavBar from "./components/RegisterLoginComponents/NavBar"

import { useDispatch } from "react-redux"
import { startUserAccount } from "./redux/actions/userAction"
import { startBudgetList } from "./redux/actions/budgetAction"
import { startCategoriesList } from "./redux/actions/categoriesAction"
import { startExpenseList } from "./redux/actions/expenseAction"

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("tokenExp")) {
      dispatch(startUserAccount())
      dispatch(startBudgetList())
      dispatch(startCategoriesList())
      dispatch(startExpenseList())
    }
  }, [])
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App
