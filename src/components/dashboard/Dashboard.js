import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Container } from "react-bootstrap"

import { startUserAccount } from "../../redux/actions/userAction"
import Expense from "./expense/Expense"
import dashboardHand from "../../assets/images/dashboard-hand.png"
import Charts from "./charts/Charts"

const Dashboard = ((props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startUserAccount())
    }, [])
    const users = useSelector((state) => {
        return state.users
    })
    return (
        <Container style={{marginTop:"90px"}}>
            <h5>DASHBOARD<h5>Dash Board - <img src={dashboardHand} alt="dashboardHand" width={"20px"} height={"auto"}/> Hi, {users.userName}</h5></h5>
            <Expense />
            <Charts/>
        </Container>
    )
})

export default Dashboard