import React, { useState, useEffect } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom"
import { useDispatch } from "react-redux";
import { startUserLogout } from "../../redux/actions/userAction"
import { startBudgetLogout } from "../../redux/actions/budgetAction"
import { startCategoryLogout } from "../../redux/actions/categoriesAction"
import { startExpenseLogout } from "../../redux/actions/expenseAction"

import PrivateRouter from "./PrivateRouter";
import Home from "./Home";
import Registerform from "./Registerform"
import Login from "./Login"
import Dashboard from "../dashboard/Dashboard";
import Setting from "../setting/Setting";
import Profile from "../profile/Profile";
import "../../assets/css/navBar.css"

const NavBar = (props) => {
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("tokenExp")) {
            handleIsLoggedIn()
        }
    },[])

    const handleIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div className="container-fluid">
            <div className="expense-nav-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-sm-12">
                            <span>Expense App</span>
                        </div>
                        <div className="col-md-6 col-lg-5 col-sm-12">
                            <ul className="expense-nav-bar ">
                                <li><Link to={"/"}>Home</Link></li>
                                {
                                    isLoggedIn ? (
                                        <>
                                            <li className="expense-nav-link"><Link to={"/dashboard"}>DashBoard</Link></li>
                                            <li><Link to={"/setting"}>Setting</Link></li>
                                            <li><Link to={"/profile"}>Profile</Link></li>
                                            <li><Link to={""} onClick={() => {
                                                localStorage.clear()
                                                handleIsLoggedIn()
                                                dispatch(startUserLogout())
                                                dispatch(startBudgetLogout())
                                                dispatch(startCategoryLogout())
                                                dispatch(startExpenseLogout())
                                                props.history.push("/")
                                            }}>Logout</Link></li>
                                        </>
                                    ) : (
                                        <>
                                            <li><Link to={"/register"}>Register</Link></li>
                                            <li><Link to={"/login"}>Login</Link></li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={"/"} render={(props) => {
                    return <Home {...props} handleIsLoggedIn={handleIsLoggedIn} />
                }} exact/>
                <Route path={"/register"} component={Registerform} exact />
                <Route path={"/login"} render={(props) => {
                    return <Login {...props} handleIsLoggedIn={handleIsLoggedIn} />
                }} exact />
                <PrivateRouter path={"/dashboard"} component={Dashboard} exact />
                <PrivateRouter path={"/setting"} component={Setting} exact />
                <PrivateRouter path={"/profile"} component={Profile} exact />
            </Switch>
        </div>
    )
}
export default withRouter(NavBar)